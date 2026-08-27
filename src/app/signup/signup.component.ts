import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupUser } from '../models/signup-user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userModel = new SignupUser();
  submitted = false;
  successMessage = '';

  onSubmit(form: NgForm): void {
    this.submitted = true;
    this.successMessage = '';
    if (form.invalid) {
      return;
    }
    console.log('Signup model bound data:', this.userModel);
    console.log('Form value:', form.value);
    this.successMessage = `Welcome, ${this.userModel.name}! Account data bound to model.`;
  }
}
