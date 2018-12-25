import { Component, OnInit } from "@angular/core" ;
import { MsgService } from "../../../service/msg/msg.service";
import { FormValid } from "../../../../decorators/formValid.decorator";
import { Service } from "../../../../decorators/service.decorator";
import {
  TemplateService,
  TemplateEnumService,
  SendService,
  SendEnum,
  SendModel,
  TemplateModel,
} from "../../../service/sms";
import { RESPONSE , ENUM } from '../../../models' ;
import { SearchModel } from "./search.model";
import { filter, map } from "rxjs/operators";
import { DateUtils, ObjectUtils, RegUtils } from '../../../shared/utils';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { combineLatest, Observable } from "rxjs" ;
import { Before, CombineAll } from "../../../../decorators/function.decorator";
import { ngIfAnimation } from '../../../routes/router-animation';
import { SearchBarModel } from '@shared/component/search-bar/search-bar.model';
@Component({
  selector: "Sms-send",
  templateUrl: "./send.component.html",
  styleUrls: ["./send.component.less"],
  animations : [ngIfAnimation]
})
export class SendComponent implements OnInit {
  constructor(
    private msg: MsgService,
    private fb : FormBuilder ,
    private templateSer : TemplateService ,
    private templateEnum : TemplateEnumService ,
    private sendEnum : SendEnum ,
    private sendSer : SendService
  ) {} ;

  ngOnInit(): void {
    this.getAllEunm();
  };

  searchModel = new SearchModel() ;

  formVisible : boolean = false ;

  form : FormGroup = this.fb.group({
    projectType : [null , [ Validators.required ] ] ,
    channelType : [null , [Validators.required ] ] ,
    sendType : [null , [Validators.required ] ] ,
    templateCode : [null ] ,
    phoneNum : [ null , ] ,
    sendTime : [ null ] ,
    phoneNums : [ null , [Validators.required ]  ]
  });

  tableData = {
    loading: true,
    page : 1 ,
    columns: [
      { title: "业务类型", reflect: "projectType", type: "text", filter: ( column ) => {
          let _item = this.type.filter( item => item.value == column.projectType )[0] ;
          return (_item as any).key ;
        } },
      { title: "批次编号", reflect: "batchNum", type: "text"} ,
      { title: "状态", reflect: "status", type: "text", filter : ( column ) => {
        const map = { 1 : "发送中" , 2 : "发送成功" , 3 : "发送失败" } ;
          return map[column.status] ? map[column.status] : "未知"
      } , fn : ( data ) => {
      }},
      { title: "创建时间", reflect: "createTime", type: "text"  , filter : ( column) => {
        return DateUtils.format(column.createTime , 'y-m-d') ;
      }},
    ],
    data: []
  };

  searchBarData : SearchBarModel = {
    conditions: [
      { name: "状态", type: "select", data: [] , model : "status" , default : 'null' , placeHolder: "选择状态", } ,
      { name: "类型", type: "select", data: [], model : "projectType" , default : 'null' ,  placeHolder: "选择类型", },
      { name: "创建时间", type: "date" , model : "createTime" , format : 'y-m-d', placeHolder: "选择创建时间" },
    ],
    notify : {
      query : ( data : SearchModel ) => { this.searchModel = ObjectUtils.extend(this.searchModel , data) as SearchModel ; this.getList() } ,
      reset : ( data : SearchModel ) => { this.searchModel = new SearchModel ; this.getList() }
    }
  };

  type : ENUM[] = [] ;

  status : ENUM[] = [] ;

  channelType : ENUM[] = [] ;

  sendType : ENUM[] = [] ;

  sendStatus : ENUM[] = [] ;

  templateENUM : ENUM[] = [] ;

  pageChange(): void {
    this.getList() ;
  };

  getAllEunm() : void {
    combineLatest(this.templateEnum.status() , this.templateEnum.type() )
      .subscribe( res => {
        this.searchBarData.conditions[1].data = res[1] ;

        this.type = res[0] ;
        this.status = res[1] ;
      })

    combineLatest( this.sendEnum.channelType() , this.sendEnum.sendType() , this.sendEnum.status() )
      .subscribe( res => {
        this.searchBarData.conditions[0].data = res[2] ;

        this.channelType = res[0] ;
        this.sendType = res[1] ;
        this.sendStatus = res[2] ;
      })
  };

  getList() : void {
    this.tableData.loading = true ;
    this.sendSer.query(this.searchModel)
      .pipe(
        filter( (res : RESPONSE ) => {
          if(res.success === false )
            this.msg.error("获取数据失败,原因:"+ res.message) ;

          return res.success === true ;
        }),
        map( (res : RESPONSE) => res.data)
      )
      .subscribe( ( data : TemplateModel[] ) => {
        this.tableData.data = data ;
        this.tableData.loading = false ;
      }) ;
  };

  add(){
    this.formVisible = !this.formVisible ;
  };


  @Before(function($event) {
    console.log(123) ;
    return new Observable( obsr => {
       const value = this.form.value ;
       if( ( value.sendType == 3 || value.sendType == 4 ) && !value.sendTime){
         this.msg.error("定时发送需要选择发送时间") ;
         return ;
       };
       obsr.next("success")
    });
  })
  @Before(function($event) {
    return new Observable( obsr => {
      try {
        const _arr = this.form.value.phoneNums.split(",");

        let mark = true ;
        let index = 0 ;
        let _item = null ;
        _arr.forEach( (item , idx) => {
          if(!RegUtils.isPhone(item)){
            mark = false ;
            index = idx ;
            _item = item ;
            return false
          };
        })

        if(!mark){
          this.msg.warn(`输入的第${index+1}个 - ${_item}手机号不合法`) ;
          return ;
        };

        obsr.next(_arr)
      }catch (e) {
        this.msg.error("输入的手机号格式不对") ;
      };
    });
  })
  @CombineAll()
  send($event , obsr1 , obsr2){
    var data = this.form.value ;

    data.phoneNums = obsr2 ;
    this.sendSer.post(data , false)
      .pipe(
        filter( (res : RESPONSE ) => {
          if(res.success === false )
            this.msg.error("发送失败,原因:"+ res.message) ;

          return res.success === true ;
        }),
      )
      .subscribe( ( res : RESPONSE ) => {
        this.formVisible = false ;
      }) ;
  };
};
