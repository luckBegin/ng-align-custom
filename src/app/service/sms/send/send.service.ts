import { Injectable } from '@angular/core' ;
import { API } from '../../API';
import { SendModel } from './model' ;
import { HttpClient, HttpHeaders } from "@angular/common/http" ;
import { ObjToQuery } from "../../ObjToQuery";
import { Observable } from "rxjs";
@Injectable({providedIn : "root"})
export class SendService {
  constructor(
    private http : HttpClient
  ){}

  jsonHeader : HttpHeaders  = new HttpHeaders().append("Content-type" , "application/json") ;

  query( data : Object ){
    const para = ObjToQuery(data) ;
    return this.http.get(API.template.send.query , {
      params : para
    })
  };

  post(data : Object , isSingle : boolean = true ){
    let url = isSingle ? API.template.send.signle : API.template.send.multi ;

    return this.http.post(url , data , {
      headers : this.jsonHeader
    })
  };
};
