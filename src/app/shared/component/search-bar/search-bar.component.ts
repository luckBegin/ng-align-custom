import { Component, Input } from '@angular/core' ;
import { SearchBarModel } from '@shared/component/search-bar/search-bar.model';

@Component({
  selector : "common-search-bar" ,
  templateUrl : './search-bar.component.html' ,
  styleUrls : [ './search-bar.component.less']
})
export class SearchBarComponent {
  constructor() {} ;

  @Input()
  SearchBarData : SearchBarModel ;

  classifyActive : number  | string = 'all' ;

  classifyChange( item : any ) {
    this.classifyActive = item.id ;
    if(this.SearchBarData.classify.fn)
      this.SearchBarData.classify.fn(item) ;
  };
  dateChange($event, type : string , item : Object ){
    console.log($event);
    console.log(123) ;
  };

};
