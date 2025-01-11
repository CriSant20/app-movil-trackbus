import { Routes } from '@angular/router';
import { AuthGuard} from './guards/auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./register/register.page').then(m => m.RegisterPage) },
  { 
    path: 'user', 
    loadComponent: () => import('./user/user.page').then(m => m.UserPage),
    canActivate: [AuthGuard], // Proteger ruta por rol
    data: { role: 'user' } 
  },
  { 
    path: 'driver', 
    loadComponent: () => import('./driver/driver.page').then(m => m.DriverPage),
    canActivate: [AuthGuard], 
    data: { role: 'driver' } 
  },
  { 
    path: 'cobrador', 
    loadComponent: () => import('./cobrador/cobrador.page').then(m => m.CobradorPage),
    canActivate: [AuthGuard], 
    data: { role: 'controller' } 
  },
];
