import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public selectedDepartment: String;
  public selectedCountry: String;
  public selectedShippingCountry: String;

  public departments: Array<Object> = [
    { id: 1, name: 'Help Deskss' },
    { id: 1, name: 'Help s' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  public countries: Array<Object> = [
    { id: 1, name: 'India' },
    { id: 2, name: 'America' },
    { id: 3, name: 'London' },
    { id: 4, name: 'Ezypt' }
  ];

  public shippingCountries: Array<Object> = [
    { id: 1, name: 'India' },
    { id: 2, name: 'America' },
    { id: 3, name: 'London' },
    { id: 4, name: 'Ezypt' }
  ];
  constructor(private fb: FormBuilder) {
    this.selectedDepartment = this.departments[0]['name'];
    this.selectedCountry = this.countries[0]['name'];
    this.selectedShippingCountry = this.shippingCountries[0]['name'];
  }

  ngOnInit() {
    // this.countryForm = this.fb.group({
    //   countryControl: ['canada']
    // });
  }

  customer({ value }) {
    console.log(value);
    console.log(this.selectedDepartment);
  }

}
