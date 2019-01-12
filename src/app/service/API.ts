import { environment } from '../../environments/environment' ;
const host : string = environment.host ;

const system = {
  depart : {
    list : host + "/department/tree" ,
    opera : host + "/department"
  }  ,
  login : host + '/employee/login' ,
  getLoginMenu :  host + "/menu/tree" ,
  menu : host + "/menu" ,
  role : host + "/role" ,
  staff : host + "/employee" ,
};

export const API = {
  system : system
};
