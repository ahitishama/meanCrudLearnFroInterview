import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-testingcomponent',
  templateUrl: './testingcomponent.component.html',
  styleUrls: ['./testingcomponent.component.scss']
})
export class TestingcomponentComponent implements OnInit {
  public operations: Array<String> = ['create', 'update', 'view', 'print', 'delete', 'download'];


  emails = [{ email: "email1" }, { email: "email2" }, { email: "email3" }, { email: 'email4' }];
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      moduleName: ['', Validators.required],
      moduleDescription: ['', Validators.required],
      useremail: this.fb.array([])
    });
  }

  onChange(email: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.registerForm.controls.useremail;

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
  }
 // convenience getter for easy access to form fields
 get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
console.log(this.registerForm.value);
    alert('SUCCESS!! :-)');
}

}


// {
//   moduleDescription: "xcvxc"
//   moduleName: "cxvxc"
//   useremail: ["email1", "email2"]
// }

