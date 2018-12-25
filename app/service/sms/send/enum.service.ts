import { Injectable } from '@angular/core' ;
import { Observable } from "rxjs";
import { ENUM } from '../../../models'
@Injectable({ providedIn : "root"})
export class SendEnum {
  status() : Observable< ENUM[] >{
    return new Observable( obsr => {
      const data = [ { key : "发送中" , value : 1 } , { key : "发送中" , value : 2 } , { key : "发送失败" , value : 3 } ]
      obsr.next( data ) ;
    })
  };

  channelType() : Observable< ENUM[] >{
    return new Observable( obsr => {
      const data = [ { key : "验证码(注重稳定及时)" , value : 1 } , { key : "营销(注重价格)" , value : 2 } , { key : "催收(注重稳定性)" , value : 3 } ]
      obsr.next( data ) ;
    })
  };
  sendType() : Observable< ENUM[] >{
    return new Observable( obsr => {
      const data = [ { key : "单发" , value : 1 } , { key : "群发" , value : 2 } , { key : "定时单发" , value : 3 } ,  { key : "定时群发" , value : 4} ]
      obsr.next( data ) ;
    })
  };

};
