import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ButtonsComponent } from './buttons.component';
import { CustomerMasterComponent } from './customer-master.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Role'
    },
    children: [
      {
        path: 'customer-master',
        component: CustomerMasterComponent,
        data: {
          title: 'CustomerMaster'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerMasterRoutingModule {}
