import { Component } from '@angular/core';
import { ConductorAsiento } from './conductor.interface';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage {
  numFilas: number;
  numColumnas: number;
  numVIP: number;
  asientos: ConductorAsiento[][];

  constructor() {
    this.numFilas = 0;
    this.numColumnas = 0;
    this.numVIP = 0;
    this.asientos = [];
  }

  generarAsientos() {
    this.asientos = [];
    let asientoNumero = 1;
    for (let i = 0; i < this.numFilas; i++) {
      const fila: ConductorAsiento[] = [];
      for (let j = 0; j < this.numColumnas; j++) {
        const tipo_asiento = asientoNumero <= this.numVIP ? 'VIP' : 'NORMAL';
        fila.push({ asiento_id: asientoNumero, tipo_asiento, numero_asiento: asientoNumero, estado: 'disponible' });
        asientoNumero++;
      }
      this.asientos.push(fila);
    }
  }

  toggleAsiento(i: number, j: number) {
    const asiento = this.asientos[i][j];
    if (asiento.estado === 'reservado') {
      return;
    }
    asiento.estado = asiento.estado === 'ocupado' ? 'disponible' : 'ocupado';
  }
}