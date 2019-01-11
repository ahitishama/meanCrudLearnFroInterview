import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private token: string;
  constructor(private router: Router) { }

  canActivate() {
    if (!this.getToken()) {
      console.log('Auth Guard');
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

}
