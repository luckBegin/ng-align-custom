import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../API';
import { Observable } from 'rxjs';
import { POST } from '../../../decorators/request.decorator';
import { MsgService } from '../msg/msg.service';
@Injectable({ providedIn: 'root' })
export class SysMenuService {
  constructor(
    private http: HttpClient,
    private msg : MsgService
  ){}

  getLoginMenu(usrId: Number) {
    const url = API.system.getLoginMenu + "/" + usrId  ;
    return this.http.get(url) ;
  };

  getAllmenu() {
    const url = API.system.getLoginMenu ;
    return this.http.get(url) ;
  };

  post(data: object) {
    const url = API.system.menu;

    const header = new HttpHeaders()
      .set('Content-type', 'application/json');

    return this.http.post(url, data, {
      headers: header,
    });
  };

  delete(data: any) {
    const url = API.system.menu + '/' + data.id;
    return this.http.delete(url);
  };

  put(data: object) {
    const url = API.system.menu;

    const header = new HttpHeaders()
      .set('Content-type', 'application/json');

    return this.http.put(url, data, {
      headers: header,
    });
  };

  @POST(API.system.login)
  login( data: any ){};
};
