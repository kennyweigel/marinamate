import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

  canActivate() {
    if (this.auth.isLoggedIn()) {
        return true
    }

    this.router.navigate(['/login']);
    return false;
  }
}