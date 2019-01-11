import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  saveModule(module) {
    console.log(module);
    return this.http.post('http://localhost:8080/modules/go', module);
  }
}
