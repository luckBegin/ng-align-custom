import { Component, OnInit } from "@angular/core" ;
import { MsgService } from "../../../service/msg/msg.service";
import { FormValid } from "../../../../decorators/formValid.decorator";
import { Service } from "../../../../decorators/service.decorator";
import { TemplateService , TemplateEnumService , TemplateModel } from "../../../service/template";
import { RESPONSE , ENUM } from '../../../models' ;
import { SearchModel } from "./search.model";
import { filter, map } from "rxjs/operators";
import { DateUtils } from '../../../shared/utils';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

let _this ;
@Component({
  selector: "Sms-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.less"],
})
export class TemplateComponent implements OnInit {
  constructor(
    private msg: MsgService,
    private templateSer : TemplateService ,
    private eunmSer : TemplateEnumService ,
    private fb : FormBuilder
  ) {} ;

  ngOnInit(): void {
    this.getList() ;
    this.getStatus() ;
    this.getType() ;
    _this = this ;
  };

  status : ENUM[] = [] ;

  type : ENUM[] = [] ;

  searchModel = new SearchModel() ;

  selected : TemplateModel ;

  form : FormGroup = this.fb.group({
    id : [ null ] ,
    projectType  : [null , [Validators.required ]] ,
    status :[null , [Validators.required ]] ,
    smsText : [null , [Validators.required ]] ,
  });

  tableData = {
    loading: true,
    columns: [
      { title: "业务类型", reflect: "projectType", type: "text", filter: ( column ) => {
          let _item = this.type.filter( item => item.value == column.projectType )[0] ;
          return (_item as any).key ;
        } },
      { title: "状态", reflect: "status", type: "mark", filter : ( column ) => {
        let _item = this.status.filter( data => data.value == column.status)[0];
        return (_item as any).key ;
      }},
      { title: "创建时间", reflect: "createTime", type: "text"  , filter : ( column) => {
        return DateUtils.format(column.createTime , 'y-m-d') ;
      }},
    ],
    data: [],
    btn: {
      title: "操作",
      items: [
        {
          type: "del",
          title: "删除",
          fn: (data) => {
            this.selected = data ;
            this.isVisible = true ;
          },
        },{
          type: "edit",
          title: "编辑",
          fn: (data) => {
            this.selected = data ;
            this.isEdit = true ;
            this.formVisible = true ;
            this.form.patchValue( data ) ;
          },
        },
      ],
    }
  };

  searchBarData = {
    btn: [{
      name: "搜索",
      type: "search",
      fn: () => {
        console.log(this);
      },
    }, {
      name: "重置",
      type: "reset",
      fn: () => {
      },
    }],
    conditions: [
      {
        name: "状态", type: "select", data: [] ,  placeHolder: "选择状态", change: ($event) => {
          console.log($event);
        },
      }, {
        name: "类型", type: "select", data: [], placeHolder: "选择类型", change: ($event) => {
          console.log($event);
        },
      }, {
        name: "创建时间", type: "date", placeHolder: "选择创建时间", change: ($event) => {
          console.log($event);
        },
      },
    ],
  };

  pageChange(): void {
    console.log(123);
  };

  isVisible: boolean = false;

  formVisible : boolean = false ;

  isEdit : boolean = false ;

  modalConfirm() {
    this.templateSer.delete(this.selected.id)
      .pipe(
        filter( (res : RESPONSE ) => {
          if(res.success === false)
            this.msg.error("删除失败,原因:" + res.message) ;

          return res.success === true ;
        })
      )
      .subscribe( data => { this.isVisible = false }) ;
  };

  getList() : void {
    this.tableData.loading = true ;
    this.templateSer.get(this.searchModel)
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

  getStatus() : void{
    this.eunmSer.status()
      .subscribe( (res : ENUM[] ) => {
        this.status = res;
        this.searchBarData.conditions[0].data = res ;
      } );
  };

  getType() : void{
    this.eunmSer.type()
      .subscribe( ( res : ENUM[] ) => {
        this.type = res ;
        this.searchBarData.conditions[1].data = res ;
      }) ;
  };

  add() : void{
    this.form.reset() ;

    this.formVisible = true ;
    this.isEdit = false ;
  };

  @Service("templateSer.put" , true , 'form' )
  save($event : Event) : void{
    this.msg.success("修改成功") ;
    this.formVisible = !this.formVisible ;
  };

  @Service("templateSer.post" , true , 'form' )
  make($event : Event){
    this.msg.success("添加成功") ;
    this.formVisible = !this.formVisible ;
  };
};
