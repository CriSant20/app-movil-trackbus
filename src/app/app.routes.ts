import { Routes } from '@angular/router';
import { authGuard} from './guards/auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./register/register.page').then(m => m.RegisterPage) },
  { 
    path: 'user', 
    loadComponent: () => import('./user/user.page').then(m => m.UserPage),
    canActivate: [authGuard], // Proteger ruta por rol
    data: { role: 'user' } 
  },
  { 
    path: 'driver', 
    loadComponent: () => import('./driver/driver.page').then(m => m.DriverPage),
    canActivate: [authGuard], 
    data: { role: 'driver' } 
  },
  { 
    path: 'cobrador', 
    loadComponent: () => import('./cobrador/cobrador.page').then(m => m.CobradorPage),
    canActivate: [authGuard], 
    data: { role: 'controller' } 
  },
];
