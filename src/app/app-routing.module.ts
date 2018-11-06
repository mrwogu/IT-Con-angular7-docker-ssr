import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'index', loadChildren: './main/index/index.module#IndexModule'},
      {
        path: 'transfer-example',
        loadChildren: './main/transfer-example/transfer-example.module#TransferExampleModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
