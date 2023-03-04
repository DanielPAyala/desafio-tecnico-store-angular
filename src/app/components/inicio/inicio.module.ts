import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InicioComponent, LoginComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [InicioComponent]
})
export class InicioModule {}
