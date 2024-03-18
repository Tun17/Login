import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  mess: boolean = false;
  loginF: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  onSubmit() {
    this.mess = false;
    const email = this.loginF.value.email;
    const password = this.loginF.value.password;
    if (email.trim() === 'tu@a' && password.trim() === '123') {
      alert('Đăng nhập thành công');
    } else {
      this.mess = true;
    }
  }

  isField(): void {
    if (this.loginF.value) {
    }
  }
}
