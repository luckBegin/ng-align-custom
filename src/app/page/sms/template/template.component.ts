import { Component ,OnInit} from '@angular/core' ;

@Component({
  selector : 'Sms-template' ,
  templateUrl : './template.component.html' ,
  styleUrls : ['./template.component.less']
})
export class TemplateComponent implements OnInit{
  constructor(){} ;

  ngOnInit(): void {
    console.log(this.tableData) ;
  };
  dateModel : any = '' ;
  dateModel2 : any = '';

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
      { name : "姓名" , type :'dateRange' , placeHolders : ["请输入姓名"] , change : ($event) => {
        console.log($event) ;
      }}
    ]
  };

  pageChange(){
    console.log(123) ;
  };

};
