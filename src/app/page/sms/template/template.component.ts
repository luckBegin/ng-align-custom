import { Component ,OnInit} from '@angular/core' ;

@Component({
  selector : 'Sms-template' ,
  templateUrl : './template.component.html' ,
  styleUrls : ['./template.component.less']
})
export class TemplateComponent implements OnInit{
  constructor(){} ;

  ngOnInit(): void {

  };
  tableData = {
    columns :  [
      { title : "name" , reflect : "name" , type : "text" , filter : (data) => 123 , fn : (data) => console.log(123) } ,
    ] ,
    data : [ { name : 1 , age : 3}  ,  { name : 2 , age : 4 } ] ,
    btn : {
      title : "操作" ,
      items : [
        {
          type : 'del' ,
          title : "删除" ,
          fn : ( data ) => { console.log(data) }
        }
      ]
    }
  };

  searchBarData = {
    classify : {
      name : "分类" ,
      data : [ { id : 1 , name : 123 } ] ,
      fn( data ){
        console.log(data) ;
      }
    },
    btn : [{
      name : "搜索" ,
      type : "search" ,
      fn : () => {
        console.log(this) ;
      }
    },{
      name : "搜索" ,
      type : "reset" ,
      fn : () => {
        console.log(321) ;
      }
    }],
    sections: [
      { name : "开始时间"  , type :'dateRange' , placeHolders : ["请输入" , '请输入'] , change : ($event) => {
        console.log($event) ;
      }}
    ],
    conditions : [
      { name : "姓名" , type : 'input' , placeHolder : '123' , change : ($event) => {
        console.log($event) ;
      }},{ name : "姓名" , type : 'select' , data : [ { key : "123" , value : "123"} ] , placeHolder : '123' , change : ($event) => {
          console.log($event) ;
      }},{ name : "姓名" , type : 'date' , placeHolder : '123' , change : ($event) => {
          console.log($event) ;
      }}
    ]
  };

  pageChange(){
    console.log(123) ;
  };

};
