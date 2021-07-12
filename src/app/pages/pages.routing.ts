
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes :Routes = [
  { path: 'dashboard', component : PagesComponent,
    children: [
      {path: '', component : DashboardComponent, data: {title: 'Dashboard'} },
      {path: 'progress', component : ProgressComponent, data: {title: 'Progress Bar'}},
      {path: 'grafica1', component : Grafica1Component, data: {title: 'Grafica One'}},
      {path: 'account-settings', component : AccountSettingsComponent, data: {title: 'Account Settings'}},
      {path: 'promesas', component : PromesasComponent, data: {title: 'Promesas'}},
      {path: 'rxjs', component : RxjsComponent, data: {title: 'Rxjs'}}
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }