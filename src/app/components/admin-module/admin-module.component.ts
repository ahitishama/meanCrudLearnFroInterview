import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../services/module.service';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
// selector: 'app-admin-module',


@Component({
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.scss']
})
export class AdminModuleComponent implements OnInit {

  // public moduleName: string;opt
  // public moduleDescription: string;
  // public operations: Array<String> = ['create', 'update', 'view', 'print', 'delete', 'download'];
  emails = [{ email: "email1" }, { email: "email2" }, { email: "email3" }, { email: 'email4' }];
  // tslint:disable-next-line:max-line-length
  operations =  [{ operation: 'create' }, { operation: 'update' }, { operation: 'view' }, { operation: 'print' },  { operation: 'delete' },  { operation: 'download' }];

  selectedOperation: any;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private moduleService: ModuleService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      moduleName: ['', Validators.required],
      moduleDescription: ['', Validators.required],
      operation1: this.fb.array([])
    });
  }

  onChange(operation: string, isChecked: boolean) {
    const operationFormArray = <FormArray>this.registerForm.controls.operation1;

    if (isChecked) {
      operationFormArray.push(new FormControl(operation));
    } else {
      const index = operationFormArray.controls.findIndex(x => x.value === operation);
      operationFormArray.removeAt(index);
    }
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    alert('SUCCESS!! :-)');

    this.moduleService.saveModule(this.registerForm.value).subscribe(res => {
    });
  }
}

