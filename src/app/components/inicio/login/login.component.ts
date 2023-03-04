import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { Usuario } from '../../../interfaces/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  log(): void {
    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }

    this.loginService.login(usuario).subscribe({
      next: (resp) => {
        this.login.reset();
        this.loginService.setNombreUsuario(resp.token)
        this.router.navigate(['/dashboard'])
      },
      error: (err) => {
        this.login.reset();
        this.toastr.error(err.error.message, 'Error');
      }
    })
  }
}
