import { Injectable } from '@angular/core' ;
import { Observable } from "rxjs";
import { ENUM } from '../../../models'
@Injectable({ providedIn : "root"})
export class TemplateEnumService{
  type() : Observable< ENUM[] > {
    return new Observable( obsr => {
      const data = [ { key : "验证" , value : 1 } , { key : "营销"  , value : 2 } , { key : "提醒/催收" ,value :3 } ] ;
      obsr.next(data)
    })
  };

  status() : Observable< ENUM[] >{
    return new Observable( obsr => {
      const data = [ { key : "失效" , value : 0 } , { key : "有效" , value : 1 } ]
      obsr.next( data ) ;
    })
  }
}
