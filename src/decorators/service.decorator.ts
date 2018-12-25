import { Observable } from 'rxjs';
import { RESPONSE } from '../app/models';
import { filter} from 'rxjs/operators';

export function Service( serviceName : string , prevent : boolean ,  data? : string | Object ){
  return function ( target : any, propertyKey : string, descriptor : PropertyDescriptor ){
    if(!/\w+.\w+/g.test(serviceName)){
      throw new Error("Invalid Service call ")
    };

    const raw = descriptor.value ;
    descriptor.value = function(...args){
      const $event = args[0] as Event ;
      const el = $event.target as HTMLButtonElement ;
        el.disabled = true ;

      const service = serviceName.split(".") ;

      let _data = null ;

      if(typeof data === 'string')
        _data = this[data].value ;
      if(typeof data === 'object' )
        _data = data ;

      ( < Observable <RESPONSE> >this[service[0]][service[1]](_data) )
        .pipe(
          filter( (res :RESPONSE) => {

            args.push( res ) ;

            el.disabled = false ;

            if(prevent === false && res.success === false ){
                raw.apply(this , args) ;
            };

            if(prevent === true && res.success === false ){
              this.msg.error("操作失败,原因 : " + res.message)
            };

            return res.success === true ;
          })
        )
        .subscribe( ( data : any ) => {
          raw.apply(this , args) ;
        });
    }
  };
};