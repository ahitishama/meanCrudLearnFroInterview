// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AdminModuleComponent } from './admin-module.component';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { ModuleService } from '../../services/module.service';
import { HttpClientModule } from '@angular/common/http';
// Dropdowns Component


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModuleRoutingModule ,
    HttpClientModule,
  ],
  declarations: [
    AdminModuleComponent
  ],
  providers: [
    ModuleService
  ],
})
export class AdminModuleModule {}
