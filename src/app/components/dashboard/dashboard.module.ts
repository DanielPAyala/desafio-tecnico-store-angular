import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { VentasComponent } from './ventas/ventas.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [DashboardComponent, VentasComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
