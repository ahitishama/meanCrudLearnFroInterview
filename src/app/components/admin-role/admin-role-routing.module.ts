import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ButtonsComponent } from './buttons.component';
import { AdminRoleComponent } from './admin-role.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Role'
    },
    children: [
      {
        path: 'role',
        component: AdminRoleComponent,
        data: {
          title: 'Role'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoleRoutingModule {}
