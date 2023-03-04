export interface Venta {
  id: number;
  total: number;
  usuarioId: number;
  fechaVenta: Date;
  activo: number;
  ventaDetalles: VentaDetalle[];
}

export interface VentaDetalle {
  id: number;
  ventaId: number;
  productoId: number;
  cantidad: number;
  precio: number;
}
