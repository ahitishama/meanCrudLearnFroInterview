import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
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

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
    data: {
      title: 'Customer'
    }
  },
  {
    path: 'test',
    component: TestComponent,
    data: {
      title: 'test'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'contact'
    }
  },
  {
    path: 'vehicle',
    component: VehicleComponent,
    data: {
      title: 'vehicle'
    }
  },
  {
    path: 'product',
    component: ProductComponent,
    data: {
      title: 'product'
    }
  },
  {
    path: 'service',
    component: ServiceComponent,
    data: {
      title: 'service'
    }
  },
  {
    path: 'vehiclemake',
    component: VehicleMakeComponent,
    data: {
      title: 'vehiclemake'
    }
  },
  {
    path: 'Vehiclemodel',
    component: VehicleModelComponent,
    data: {
      title: 'Vehiclemodel'
    }
  },
  {
    path: 'vehicletype',
    component: VehicleTypeComponent,
    data: {
      title: 'vehicletype'
    }
  },
  {
    path: 'enginetype',
    component: EngineTypeComponent,
    data: {
      title: 'enginetype'
    }
  },
  {
    path: 'dealer',
    component: DealerComponent,
    data: {
      title: 'dealer'
    }
  },
  {
    path: 'insurance',
    component: InsuranceComponent,
    data: {
      title: 'insurance'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
