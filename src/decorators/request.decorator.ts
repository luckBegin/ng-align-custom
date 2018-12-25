import { ObjToQuery } from '../app/service/ObjToQuery';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RESPONSE } from '../app/models';
import { HttpHeaders } from '@angular/common/http';
export function GET( url : string , prevent : boolean = true , msg : string = '获取数据失败,原因 : ') : MethodDecorator {
  return function ( target : any, propertyKey : string, descriptor : PropertyDescriptor ) {
    const raw = descriptor.value ;
    descriptor.value = function( ...arg ){
      return new Observable( obsr => {
        let queryPara = ObjToQuery(arg[0]) ;
        this.http.get(url , {
          params : queryPara
        })
          .pipe(
            filter( (res : RESPONSE) => {

              if(res.success === false ){
                this.msg.error(msg + res.message) ;
              };
              if(prevent !== true ){
                obsr.next(res) ;
              };
              return res.success === true ;
            }),
            map( (res : RESPONSE) => res.data)
          )
          .subscribe( res => {
            obsr.next(res) ;
          })
      });
    };
  };
};

export function POST( url : string , prevent : boolean = true , msg : string = '提交失败,原因 : ' , json : boolean = true ) : MethodDecorator {
  return function ( target : any, propertyKey : string, descriptor : PropertyDescriptor ) {
    const raw = descriptor.value ;
    descriptor.value = function( ...arg ){
      const data = arg[0] ;
      const headers = new HttpHeaders()
        if(json)
        headers.append("Content-type" , "application/json") ;

      return new Observable( obsr => {
        this.http.post(url , data , {
          headers : headers
        })
          .pipe(
            filter( (res : RESPONSE) => {

              if(res.success === false ){
                this.msg.error(msg + res.message) ;
              };
              if(prevent !== true ){
                obsr.next(res) ;
              };
              return res.success === true ;
            }),
            map( (res : RESPONSE) => res.data)
          )
          .subscribe( res => {
            obsr.next(res) ;
          })
      });
    };
  };
};


export function PUT( url : string , prevent : boolean = true ,  msg : string = '保存失败,原因 : ' , json : boolean = true ) : MethodDecorator {
  return function ( target : any, propertyKey : string, descriptor : PropertyDescriptor ) {
    const raw = descriptor.value ;
    descriptor.value = function( ...arg ){
      const headers = new HttpHeaders()
      if(json)
        headers.append("Content-type" , "application/json") ;

      return new Observable( obsr => {
        this.http.put(url , arg[0] , {
          headers : headers
        })
          .pipe(
            filter( (res : RESPONSE) => {

              if(res.success === false ){
                this.msg.error(msg + res.message) ;
              };
              if(prevent !== true ){
                obsr.next(res) ;
              };
              return res.success === true ;
            }),
            map( (res : RESPONSE) => res.data)
          )
          .subscribe( res => {
            obsr.next(res) ;
          })
      });
    };
  };
};

export function DELETE( url : string , prevent : boolean = true , msg : string = '删除失败,原因 : ' ) : MethodDecorator {
  return function ( target : any, propertyKey : string, descriptor : PropertyDescriptor ) {
    const raw = descriptor.value ;
    descriptor.value = function( ...arg ){
      return new Observable( obsr => {
        this.http.delete(url + "/" + arg[0].id)
          .pipe(
            filter( (res : RESPONSE) => {

              if(res.success === false ){
                this.msg.error(msg + res.message) ;
              };
              if(prevent !== true ){
                obsr.next(res) ;
              };
              return res.success === true ;
            }),
            map( (res : RESPONSE) => res.data)
          )
          .subscribe( res => {
            obsr.next(res) ;
          })
      });
    };
  };
};