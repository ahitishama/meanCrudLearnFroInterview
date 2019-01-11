import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccessControlComponent } from './access-control.component';
import { AccessControlRoutingModule } from './access-control-routing.module';
import { AccessControlService } from '../../services/access-control.service';
// Dropdowns Component
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccessControlRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AccessControlComponent
  ],
  providers: [
    AccessControlService
  ],
})
export class AccessControlModule {
}
