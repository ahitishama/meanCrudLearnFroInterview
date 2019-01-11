import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModuleComponent } from './admin-module.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Module'
    },
    children: [
      {
        path: 'module',
        component: AdminModuleComponent,
        data: {
          title: 'Modules Creation'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule {}
