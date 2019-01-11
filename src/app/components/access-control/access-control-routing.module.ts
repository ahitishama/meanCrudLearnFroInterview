
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessControlComponent } from './access-control.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Control'
    },
    children: [
      {
        path: 'control',
        component: AccessControlComponent,
        data: {
          title: 'Role Access Permission Screen'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessControlRoutingModule {}
