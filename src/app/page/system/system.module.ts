import { NgModule } from '@angular/core' ;
import { NgZorroAntdModule } from 'ng-zorro-antd' ;
import { SharedModule } from '../../shared/shared.module' ;
import { RouterModule , Router ,Routes } from '@angular/router' ;
import { DepartComponent } from "./depart/depart.component";
import { RoleComponent } from './role/role.component';

const routes  : Routes = [
  { path: "depart", component: DepartComponent, data: { title: "部门管理", titleI18n: "部门管理" } },
  { path : "role" , component: RoleComponent, data: { title: "角色管理", titleI18n: "角色管理" } }
];

const component = [
  DepartComponent ,
  RoleComponent
];
@NgModule({
	declarations : [
		...component
	],
	imports: [
    SharedModule,
		NgZorroAntdModule,
		RouterModule.forChild(routes)
	],
	providers: [],
	bootstrap: []
})
export class SystemModule { };
