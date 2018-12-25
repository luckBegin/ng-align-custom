import { Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ACLService } from '@delon/acl';

import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';
import { MenuService as menuSer } from '../../service' ;
import { filter  , map } from 'rxjs/operators' ;
import { RESPONSE } from '../../models' ;
import { SysMenuService } from '../../service/system';
import { LocalStorageService } from '../../service/storage';
/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private injector: Injector ,
    private menuSer : SysMenuService ,
    private ls : LocalStorageService
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  private viaHttp(resolve: any, reject: any) {
    // const usrId = this.ls.get("loginInfo")['id'] ;
    // this.menuSer.getLoginMenu(usrId)
    //   .pipe(
    //     filter( ( res : RESPONSE )=> res.success === true ) ,
    //     map( (res : RESPONSE) => res.data )
    //   )
    //   .subscribe( ( data : Object[] ) => {
    //     console.log(data) ;
    //     // this.menuService.add(data as any ) ;
    //     resolve({});
    //   });
    // zip(
    //   this.httpClient.get('assets/tmp/app-data.json')
    // ).pipe(
    //   // 接收其他拦截器后产生的异常消息
    //   catchError(([appData]) => {
    //       resolve(null);
    //       return [appData];
    //   })
    // ).subscribe(([appData]) => {
    //
    //   // application data
    //   const res: any = appData;
    //   // 应用信息：包括站点名、描述、年份
    //   this.settingService.setApp(res.app);
    //   // 用户信息：包括姓名、头像、邮箱地址
    //   this.settingService.setUser(res.user);
    //   // ACL：设置权限为全量
    //   this.aclService.setFull(true);
    //   // 初始化菜单
    //   this.menuService.add(res.menu);
    //   // 设置页面标题的后缀
    //   this.titleService.suffix = res.app.name;
    // },
    // () => { },
    // () => {
    //   resolve(null);
    // });

    resolve({}) ;
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      // this.viaMock(resolve, reject);

    });
  }
}
