import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Observable } from 'rxjs' ;
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
          text: '主导航',
          group: true,
          children: [
            {
              text: '短信模板',
              link: '/sms/template',
              icon: "anticon anticon-message"
            },
            {
              text: '其他配置',
              link: '/sms/config',
              icon: "anticon anticon-message"
            }
          ]
        },        {
          text: '系统设置',
          group: true,
          children: [
            {
              text: '角色设置',
              link: '/system/role',
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
  }

}
