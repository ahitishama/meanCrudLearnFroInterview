import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http: HttpClient
  ) { }

  getModule() {
    return this.http.get('http://localhost:8080/modules');
  }
  saveModule(role) {
    console.log(role);
    return this.http.post('http://localhost:8080/roles/save', role);
  }
}
