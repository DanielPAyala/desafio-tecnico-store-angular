import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../../services/ventas.service';
import { Venta } from '../../../interfaces/venta';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  listVentas: Venta[] = [];

  constructor(
    private ventasService: VentasService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.ventasService.getListVentasByUser().subscribe({
      next: (resp) => {
        this.listVentas = resp;
      },
      error: (err) => {},
    });
  }

  verDetalle() {
    this.toastr.warning('En Desarrollo', 'Warning')
  }
}
