import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {

  constructor(
    private http: HttpClient
  ) { }
  getRole() {
    return this.http.get('http://localhost:8080/roles');
  }
}
