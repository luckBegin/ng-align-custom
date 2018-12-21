import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../../service/system/role.service';
import { MsgService } from '../../../service/msg/msg.service';
import { MenuService } from '../../../service/menu';
import { NzTreeNode } from 'ng-zorro-antd';
import { RESPONSE } from '../../../models';
import { filter } from 'rxjs/operators';
import { TableData } from '@shared/component/table/table.model';

@Component({
  selector : 'system-role' ,
  templateUrl : './role.component.html' ,
  styleUrls : ['./role.component.less']
})
export class RoleComponent implements OnInit{
  constructor(
    private fb: FormBuilder,
    private msg: MsgService,
    private service: RoleService,
    private menuService: MenuService,
  ) {} ;

  ngOnInit(){
  };

  validateForm : FormGroup = this.fb.group({
    "name" : [null , [Validators.required]] ,
    'description' : [null] ,
    "id" : [null]
  });

  tableData = {
    loading : true ,
    page : 1 ,
    columns : [
      { title : "角色名" , type : "text" , reflect : "name" } ,
      { title : "备注" , type:"text" ,reflect : "description"} ,
    ],
    btn: {
      title: "操作",
      items: [
        {
          type: "del",
          title: "删除",
          fn: (data) => {
          },
        },{
          type: "edit",
          title: "编辑",
          fn: (data) => {
          },
        },
      ],
    }
  };

  pageChange(){

  };

}
