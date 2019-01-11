import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminRoleComponent } from './admin-role.component';

// Buttons Routing
// import { ButtonsRoutingModule } from './buttons-routing.module';
import { AdminRoleRoutingModule } from './admin-role-routing.module';
import { RoleService } from '../../services/role.service';
import { HttpClientModule } from '@angular/common/http';


// Angular

@NgModule({
  imports: [
    CommonModule,
    // ButtonsRoutingModule,
    AdminRoleRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AdminRoleComponent,

  ],
  providers: [
    RoleService
  ],
})
export class AdminRoleModule { }
