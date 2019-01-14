import {Injectable, EventEmitter, OnInit} from "@angular/core";
import { API } from '../API';
import { ObjToQuery } from '../ObjToQuery' ;
import { HttpClient , HttpParams , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn : 'root'})
export class RoleService{

  constructor(
    private http : HttpClient
  ){}
  getList(obj ?: Object){
    const url = API.system.role ;

    const para = ObjToQuery(obj) ;

    return this.http.get(url , {
      params : para
    })

    // return new Observable( obsr => {
    //   setTimeout( () => {
    //     obsr.next({"code":0,"success":true,"data":[{"id":3,"createTime":1530190020000,"modifyTime":1530213336000,"createOperatorId":null,"modifyOperatorId":3,"modifyOperatorName":null,"name":"admin","description":"系统管理员角色","enabled":1,"menuDTOS":null},{"id":13,"createTime":1534966748000,"modifyTime":1537250677000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"name":"信审专员","description":"信审专员","enabled":1,"menuDTOS":null},{"id":14,"createTime":1537236502000,"modifyTime":1537251375000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"name":"信审管理","description":"信审管理","enabled":1,"menuDTOS":null},{"id":15,"createTime":1537258492000,"modifyTime":null,"createOperatorId":3,"modifyOperatorId":null,"modifyOperatorName":null,"name":"信审专员 测试 ","description":"测试 ","enabled":1,"menuDTOS":null}],"message":null,"page":{"totalNumber":4,"currentPage":1,"totalPage":1,"pageSize":10,"dbIndex":0,"dbNumber":10,"isPaging":true}})
    //   } , 2000 ) ;
    // })
  };

  getRoleById(id:number){
    const url = API.system.role + "/" + id ;
    return this.http.get(url) ;
    // return new Observable( obsr => {
    //   setTimeout( () => {
    //     obsr.next({"code":0,"success":true,"data":{"id":3,"createTime":1530190020000,"modifyTime":1530213336000,"createOperatorId":null,"modifyOperatorId":3,"modifyOperatorName":null,"name":"admin","description":"系统管理员角色","enabled":1,"menuDTOS":[{"id":11,"createTime":1530189316000,"modifyTime":1530196529000,"createOperatorId":null,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":null,"url":"/system","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":12,"createTime":1530190858000,"modifyTime":1530195799000,"createOperatorId":null,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":11,"url":"/system/menu","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":16,"createTime":1530196374000,"modifyTime":1534181212000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":11,"url":"/system/role","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":17,"createTime":1530196390000,"modifyTime":1534193867000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":11,"url":"/system/depart","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":15,"createTime":1530196346000,"modifyTime":1534182208000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":11,"url":"/system/admin","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":22,"createTime":1530298857000,"modifyTime":1530299261000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":20,"url":"/credit/usrCard","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":27,"createTime":1531489736000,"modifyTime":1534181820000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":null,"url":"/risk","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":28,"createTime":1531489760000,"modifyTime":1544554231000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":27,"url":"/risk/list","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":29,"createTime":1531489775000,"modifyTime":1534194215000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":null,"url":"/finance","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":25,"createTime":1531489681000,"modifyTime":1534181803000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":null,"url":"/user","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":43,"createTime":1534182076000,"modifyTime":1534182717000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":25,"url":"/usr/list","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":44,"createTime":1534196098000,"modifyTime":1534256411000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":null,"url":"/*","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":45,"createTime":1534196147000,"modifyTime":1534256422000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":44,"url":"/order/list","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":46,"createTime":1534963322000,"modifyTime":1535957763000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":27,"url":"/risk/totle","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":47,"createTime":1534963364000,"modifyTime":1535957841000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":27,"url":"/risk/shure","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":51,"createTime":1541098902000,"modifyTime":1543842210000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":null,"url":"/productCenter","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":52,"createTime":1541098973000,"modifyTime":1544573424000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":51,"url":"/productCenter/product","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":53,"createTime":1542115514000,"modifyTime":null,"createOperatorId":3,"modifyOperatorId":null,"modifyOperatorName":null,"parentId":29,"url":"/finance/loanList","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":54,"createTime":1542115551000,"modifyTime":null,"createOperatorId":3,"modifyOperatorId":null,"modifyOperatorName":null,"parentId":29,"url":"/finance/repayList","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":55,"createTime":1542325713000,"modifyTime":1544878504000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":null,"url":"/channel","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":56,"createTime":1542325735000,"modifyTime":1544878514000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":55,"url":"/channel/channelList","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":57,"createTime":1542325756000,"modifyTime":1544878528000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":55,"url":"/channel/h5","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":58,"createTime":1542630273000,"modifyTime":1544878536000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":null,"url":"/reportCenter","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":59,"createTime":1542630298000,"modifyTime":1544878545000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":58,"url":"/reportCenter/channeldata","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":60,"createTime":1542634815000,"modifyTime":1544878553000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":55,"url":"/coupon/list","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":63,"createTime":1543839593000,"modifyTime":1543842224000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":51,"url":"/productCenter/userLevel","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":61,"createTime":1543839045000,"modifyTime":1543839128000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":null,"url":"statistics","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":62,"createTime":1543839149000,"modifyTime":1543839346000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":61,"url":"/statistics/default","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":64,"createTime":1543839614000,"modifyTime":1544537981000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":51,"url":"/productCenter/contract","isButton":0,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":88,"createTime":1544616084000,"modifyTime":1544616893000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":12,"url":"新增菜单","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":89,"createTime":1544616097000,"modifyTime":1544616899000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":12,"url":"编辑菜单","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":94,"createTime":1544616237000,"modifyTime":1544616912000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":16,"url":"新增角色","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":95,"createTime":1544616248000,"modifyTime":1544616917000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":16,"url":"编辑角色","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":123,"createTime":1544652531000,"modifyTime":1544879209000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":16,"url":"删除角色","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":91,"createTime":1544616147000,"modifyTime":1544616922000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":17,"url":"编辑部门","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":121,"createTime":1544652390000,"modifyTime":1544879189000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":17,"url":"新增部门","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":124,"createTime":1544652544000,"modifyTime":1544879218000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":17,"url":"删除部门","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":96,"createTime":1544616265000,"modifyTime":1544616903000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":15,"url":"新增管理员","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":97,"createTime":1544616281000,"modifyTime":1544616907000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":15,"url":"编辑管理员","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":122,"createTime":1544652514000,"modifyTime":1544879201000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":15,"url":"删除管理员","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":50,"createTime":1535147549000,"modifyTime":1535957852000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":27,"url":"/*","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":113,"createTime":1544636270000,"modifyTime":1544879002000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":28,"url":"查看详情","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":114,"createTime":1544636284000,"modifyTime":1544878822000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":28,"url":"通过拒绝","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":115,"createTime":1544636294000,"modifyTime":1544879031000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":28,"url":"撤回","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":116,"createTime":1544638572000,"modifyTime":1544879068000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":28,"url":"信审记录","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":104,"createTime":1544621494000,"modifyTime":1544878965000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":43,"url":"用户详情","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":105,"createTime":1544621511000,"modifyTime":1544878971000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":43,"url":"用户认证详情","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":106,"createTime":1544621534000,"modifyTime":1544878978000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":43,"url":"用户借款详情","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":134,"createTime":1544727227000,"modifyTime":1544880071000,"createOperatorId":28,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":43,"url":"信审订单列表","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":120,"createTime":1544640763000,"modifyTime":1544879131000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":45,"url":"查看订单详情","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":68,"createTime":1544567975000,"modifyTime":1544617591000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":47,"url":"通过拒绝","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":76,"createTime":1544614969000,"modifyTime":1544619197000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":52,"url":"新增贷款产品","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":77,"createTime":1544615140000,"modifyTime":1544619204000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":52,"url":"编辑贷款产品","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":79,"createTime":1544615208000,"modifyTime":1544619211000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":52,"url":"删除贷款产品","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":98,"createTime":1544617445000,"modifyTime":1544878780000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":53,"url":"放款操作","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":118,"createTime":1544640321000,"modifyTime":1544879116000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":53,"url":"查看借款详情","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":67,"createTime":1544567887000,"modifyTime":1544617461000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":54,"url":"结算操作","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":119,"createTime":1544640345000,"modifyTime":1544879123000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":54,"url":"查看借款详情","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":73,"createTime":1544568072000,"modifyTime":1544617545000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":56,"url":"编辑渠道","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":87,"createTime":1544615875000,"modifyTime":1544617563000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":56,"url":"新增渠道","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":99,"createTime":1544617694000,"modifyTime":1544878835000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":56,"url":"新增渠道分支","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":100,"createTime":1544617722000,"modifyTime":1544878847000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":56,"url":"编辑渠道分支","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":101,"createTime":1544617744000,"modifyTime":1544878857000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":56,"url":"快速生成邀请码","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":102,"createTime":1544617762000,"modifyTime":1544878869000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":56,"url":"批量导出","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":103,"createTime":1544617781000,"modifyTime":1544878875000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":56,"url":"批量导入","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":125,"createTime":1544652676000,"modifyTime":1544879237000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":56,"url":"查询渠道分支","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":65,"createTime":1544446034000,"modifyTime":1544617816000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":57,"url":"新增H5渠道","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":75,"createTime":1544568135000,"modifyTime":1544617835000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":57,"url":"编辑H5渠道","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":131,"createTime":1544701799000,"modifyTime":1544879282000,"createOperatorId":28,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":59,"url":"查看h5渠道统计","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":132,"createTime":1544701835000,"modifyTime":1544879290000,"createOperatorId":28,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":59,"url":"导出h5渠道统计","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":133,"createTime":1544701866000,"modifyTime":1544879297000,"createOperatorId":28,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":59,"url":"导出邀请码渠道统计","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":126,"createTime":1544654881000,"modifyTime":1544878684000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":60,"url":"新增优惠券","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":127,"createTime":1544654899000,"modifyTime":1544878692000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":60,"url":"编辑优惠券","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":128,"createTime":1544654910000,"modifyTime":1544878702000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":60,"url":"删除优惠券","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":129,"createTime":1544654932000,"modifyTime":1544879267000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":60,"url":"紧急暂停","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":130,"createTime":1544654943000,"modifyTime":1544878710000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":60,"url":"PUSH推送","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":80,"createTime":1544615238000,"modifyTime":1544619220000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":63,"url":"新增用户等级","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":81,"createTime":1544615269000,"modifyTime":1544619229000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":63,"url":"编辑用户等级","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null},{"id":82,"createTime":1544615290000,"modifyTime":1544619236000,"createOperatorId":3,"modifyOperatorId":3,"modifyOperatorName":null,"parentId":63,"url":"删除用户等级","isButton":1,"buttonKey":null,"iconPath":"anticon anticon-bars","enabled":1,"menuDescriptions":null,"children":null,"controllerIds":null,"isAuth":null}]},"message":null,"page":null})
    //   } , 2000 )
    // })
  };

  post(data: object){
    const url = API.system.role ;

    const header = new HttpHeaders()
      .set("Content-type" , "application/json") ;

    return this.http.post(url , data , {
      headers : header
    })
  };

  delete(data : any ){
    const url = API.system.role + "/" + data.id ;
    return this.http.delete(url) ;
  }

  put(data: object){
    const url = API.system.role ;

    const header = new HttpHeaders()
      .set("Content-type" , "application/json") ;

    return this.http.put(url , data , {
      headers : header
    })
  };
};
