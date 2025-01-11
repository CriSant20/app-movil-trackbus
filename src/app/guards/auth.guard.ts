import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const requiredRole = route.data['role'];
    const userRole = this.authService.getUserRole();

    if (this.authService.isAuthenticated() && userRole === requiredRole) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
