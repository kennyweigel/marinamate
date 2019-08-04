import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

  canActivate() {
    this.auth.logout();
    return false
  }
}