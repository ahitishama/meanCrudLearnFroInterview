import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public salutation: String;
  public owner: String;
  public mailingCountry: String;
  constructor() { }

  ngOnInit() {
  }

  contact({value}) {
    console.log(this.salutation);

    console.log(value);
  }

}
