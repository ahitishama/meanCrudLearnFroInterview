import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Subscription } from 'rxjs';


@Component({
  // selector: 'app-admin-role',
  templateUrl: './admin-role.component.html',
  styleUrls: ['./admin-role.component.scss']
})
export class AdminRoleComponent implements OnInit {

  public roleName: string;
  public roleDescription: string;
  public selectedModule: string;

  // public levels: Array<Object> = [];

  public levels: Array<Object> = [
    {num: 0, name: 'AA'},
    {num: 1, name: 'BB'}
];
message: any;
subscription: Subscription;

  constructor(
    private roleServices: RoleService
  ) {
    // this.subscription = this.roleServices.getModule().subscribe(message => {this.message = message ; } )
    // console.log(this.message);
  }
//   ngOnDestroy() {
//     // unsubscribe to ensure no memory leaks
//     this.subscription.unsubscribe();
// }
  ngOnInit() {

  }


  // compareFn(a, b) {
  //   //console.log(a, b, a && b && a.num === b.num);
  //   return a && b && a.num === b.num;
  // }



  saveRole({value}) {
    console.log(value);
    this.roleServices.saveModule(value).subscribe(res => {
    });
  }

}
