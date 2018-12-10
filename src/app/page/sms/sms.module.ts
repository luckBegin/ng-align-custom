import { NgModule } from '@angular/core' ;
import { NgZorroAntdModule } from 'ng-zorro-antd' ;
import { SharedModule } from '../../shared/shared.module' ;
import { RouterModule , Router ,Routes } from '@angular/router' ;
import { TemplateComponent } from './template/template.component';

const routes  : Routes = [
  { path: 'template', component: TemplateComponent, data: { title: '短信模板', titleI18n: '短信模板' } },
];
const component = [
  TemplateComponent
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
export class SmsModule{ }
