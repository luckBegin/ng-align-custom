const host : string = 'http://g3app-pre.pandafintech.com.br' ;
const template = {
  template : {
    query : host + "/smsTemplate/query" ,
    delete : host + "/smsTemplate/delete/" ,
    post : host +"/smsTemplate/save" ,
    put : host + "/smsTemplate/update"
  },
  send : {
    query : host + "/smsHistory/query" ,
    signle : host + "/smsSend/single" ,
    multi : host + "/smsSend/multi"
  }
};
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
  template : template ,
  system : system
};
