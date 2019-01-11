// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { CustomerMasterComponent } from './customer-master.component';
import { CustomerMasterRoutingModule } from './customer-master-routing.module';
import { ModuleService } from '../../services/module.service';
import { HttpClientModule } from '@angular/common/http';
// Dropdowns Component


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerMasterRoutingModule ,
    HttpClientModule,
  ],
  declarations: [
    CustomerMasterComponent
  ],
  providers: [
    ModuleService
  ],
})
export class CustomerMasterModule {}
