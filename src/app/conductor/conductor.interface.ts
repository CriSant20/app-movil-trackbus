export interface ConductorAsiento {
  asiento_id: number;
  tipo_asiento: string;
  numero_asiento: number;
  estado?: 'disponible' | 'ocupado' | 'reservado';
  precio?: number;
}