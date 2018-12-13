import { NgModule } from '@angular/core' ;
import { NgZorroAntdModule } from 'ng-zorro-antd' ;
import { SharedModule } from '../../shared/shared.module' ;
import { RouterModule , Router ,Routes } from '@angular/router' ;
import { RoleComponent } from './role/role.component';

const routes  : Routes = [
  { path: 'role', component: RoleComponent, data: { title: '角色', titleI18n: '角色' } },
];
const component = [
  RoleComponent
]
@NgModule({
	declarations : [
		...component
	] ,
	imports: [
    SharedModule,
		NgZorroAntdModule,
		RouterModule.forChild(routes)
	],
	providers: [],
	bootstrap: []
})
export class SystemModule{ }
