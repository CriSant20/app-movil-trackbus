import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor() {}

  login(email: string, password: string): boolean {
    // Aquí valida el usuario y su rol desde tu backend o lógica local
    if (email === 'user@test.com' && password === '123') {
      this.currentUser = { role: 'user' };
      return true;
    } else if (email === 'driver@test.com' && password === '123') {
      this.currentUser = { role: 'driver' };
      return true;
    } else if (email === 'controller@test.com' && password === '123') {
      this.currentUser = { role: 'controller' };
      return true;
    }
    return false;
  }

  getUserRole(): string {
    return this.currentUser?.role;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  logout(): void {
    this.currentUser = null;
  }
}
