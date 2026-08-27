import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUser } from '../models/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userModel = new LoginUser();
  submitted = false;

  onSubmit(form: NgForm): void {
    this.submitted = true;
    if (form.invalid) {
      return;
    }
    console.log('Login model bound data:', this.userModel);
    console.log('Form value:', form.value);
  }
}
