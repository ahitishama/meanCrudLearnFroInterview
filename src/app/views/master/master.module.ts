import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import { MasterRoutingModule } from './master-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { VehicleMakeComponent } from './vehicle-make/vehicle-make.component';
import { VehicleModelComponent } from './vehicle-model/vehicle-model.component';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { EngineTypeComponent } from './engine-type/engine-type.component';
import { DealerComponent } from './dealer/dealer.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { TestComponent } from './test/test.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MasterRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    CustomerComponent,
    ContactComponent,
    VehicleComponent,
    ProductComponent,
    ServiceComponent,
    VehicleMakeComponent,
    VehicleModelComponent,
    VehicleTypeComponent,
    EngineTypeComponent,
    DealerComponent,
    InsuranceComponent,
    TestComponent,
  ]
})
export class MasterModule { }
