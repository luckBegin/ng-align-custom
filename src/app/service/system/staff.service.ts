import { Injectable } from "@angular/core";
import { API } from '../API';
import { ObjToQuery } from '../ObjToQuery' ;
import { HttpClient ,  HttpHeaders } from '@angular/common/http';
import { PUT } from '../../../decorators/request.decorator';
import { MsgService } from '..';

@Injectable({providedIn : 'root'})
export class StaffService{

  constructor(
    private http : HttpClient ,
    private msg : MsgService
  ){}

  getList(obj : Object){
    const url = API.system.staff ;

    const para = ObjToQuery(obj) ;

    return this.http.get(url , {
      params : para
    });
  };

  @PUT(API.system.staff)
  put(data: object){
    const url = API.system.staff ;

    const header = new HttpHeaders()
      .set("Content-type" , "application/json") ;

    return this.http.post(url , data , {
      headers : header
    })
  };

  post(data: object){
    const url = API.system.staff ;

    const header = new HttpHeaders()
      .set("Content-type" , "application/json") ;

    return this.http.post(url , data , {
      headers : header
    })
  };
  delete( data : any ){
    console.log(data) ;
    const url = API.system.staff + "/" + data.id ;
    return this.http.delete(url) ;
  };

  getStaffById(id:number){
    const url = API.system.staff + "/" + id ;
    return this.http.get(url) ;
  };
};
