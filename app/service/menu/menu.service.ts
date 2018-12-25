import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Observable } from 'rxjs' ;
import { RESPONSE } from '../../models';
import { API } from '../API';
@Injectable({
  providedIn : "root"
})
export class  MenuService {
  constructor(
    private  http : HttpClient
  ){} ;

  get(){
    return new Observable( resolve => {
      const menu = [
        {
          text: '短信',
          group: true,
          children: [
            {
              text: '短信模板',
              link: '/sms/template',
              icon: "anticon anticon-message"
            },
            {
              text: '短信发送',
              link: '/sms/send',
              icon: "anticon anticon-message"
            }
          ]
        }, {
          text: '系统配置',
          group: true,
          children: [
            {
              text: '部门设置',
              link: '/system/depart',
              icon: "anticon anticon-message"
            },{
              text: '角色管理',
              link: '/system/role',
              icon: "anticon anticon-message"
            },{
              text: '菜单管理',
              link: '/system/menu',
              icon: "anticon anticon-message"
            },{
              text: '员工管理',
              link: '/system/staff',
              icon: "anticon anticon-message"
            }
          ]
        }
      ];

      resolve.next( {
        success : true ,
        data : menu
      })
    });
  };

  getAllmenu(){
    const url = API.system.getLoginMenu ;

    return this.http.get(url) ;
  }

};
