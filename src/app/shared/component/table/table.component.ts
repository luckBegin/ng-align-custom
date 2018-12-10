import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableData } from '@shared/component/table/table.model';
@Component({
  selector : "common-table" ,
  templateUrl : "./table.component.html",
  styleUrls : ["./table.component.less"] ,
})
export class TableComponent implements OnInit{

  ngOnInit(){

  };
  @Input()
    TableData : TableData ;

  @Output()
    change : EventEmitter<any> = new EventEmitter() ;

  icoActive : string = 'top' ;

  icoIndex : number ;

  setUp(fn , idx){
    if(this.icoActive == 'top'){
      this.icoActive = 'bottom' ;
    }else{
      this.icoActive = 'top' ;
    };
    this.icoIndex = idx ;
    fn(this.icoActive);
  };

  pageChange(type : string , number : number){
    this.change.emit({
      type :type ,
      number : number
    });
  };
};
