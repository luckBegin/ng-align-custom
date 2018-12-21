import { Injectable } from '@angular/core' ;
import { API } from '../../API';
import { TemplateModel } from './model' ;
import { HttpClient, HttpHeaders } from "@angular/common/http" ;
import { ObjToQuery } from "../../ObjToQuery";
import { Observable } from "rxjs";
@Injectable({providedIn : "root"})
export class TemplateService {
  constructor(
    private http : HttpClient
  ){}

  jsonHeader : HttpHeaders  = new HttpHeaders().append("Content-type" , "application/json") ;

  get( query ) : Observable< any >{
    return this.http.get(API.template.template.query ,{
      params :  ObjToQuery(query)
    });
    // return new Observable( obsr => {
    //   setTimeout( () => {
    //     const data = {
    //       success : true ,
    //       data : [ { id : 1 , projectType : 1 , status : 1  ,smsText : "123" , createTime : "2012-12-12 00:00:00"} ] ,
    //       message : "string" ,
    //       code : 123
    //     }
    //     obsr.next( data )
    //   } , 2000)
    // })
  };

  delete( id : number){
    return this.http.delete(API.template.template.delete + "/" + id ) ;
  };

  put( data : TemplateModel ) : Observable< any > {
    return this.http.put(API.template.template.put , data)
    // return new Observable( obsr => {
    //   setTimeout( () => {
    //     obsr.next({ success : false , data : 1 , message : "123" , code : 1 })
    //   } , 2000 );
    // })
  };

  post( data : TemplateModel ) : Observable< any > {
    return this.http.post( API.template.template.post , data , {
      headers : this.jsonHeader
    })
    // return new Observable( obsr => {
    //   setTimeout( () => {
    //     obsr.next({ success : true , data : 1 , message : "123" , code : 1 })
    //   } , 2000 )
    // });
  };
};
