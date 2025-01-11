import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Asegúrate de incluir IonicModule

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule  // Asegúrate de que se importe IonicModule
  ],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit() {}

  // Método login
  login() {
    console.log('Iniciando sesión con:', this.email, this.password);
    // Aquí puedes agregar la lógica de autenticación
  }
}
