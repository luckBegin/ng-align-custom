import { NgModule } from "@angular/core" ;
import { NgZorroAntdModule } from "ng-zorro-antd" ;
import { SharedModule } from "../../shared/shared.module" ;
import { RouterModule, Router, Routes } from "@angular/router" ;
import { TemplateComponent } from "./template/template.component";
import { SendComponent } from "./send/send.component";

const routes: Routes = [
  { path: "template", component: TemplateComponent, data: { title: "短信模板", titleI18n: "短信模板" } },
  { path: "send", component: SendComponent, data: { title: "短信发送", titleI18n: "短信发送" } },
];

const component = [
  TemplateComponent,
  SendComponent
];

@NgModule({
  declarations: [
    ...component,
  ],
  imports: [
    SharedModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [],
})
export class SmsModule {
}
