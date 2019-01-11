import { Component, OnInit } from '@angular/core';
import { AccessControlService } from '../../services/access-control.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnInit {
  public selectedRole: string;
  subscription: Subscription;
  message: Object;

  constructor(private accessControlService: AccessControlService) {
    this.subscription = this.accessControlService.getRole().subscribe(message => {this.message = message ; });
    console.log(this.message);
   }

  ngOnInit() {
  }

}
