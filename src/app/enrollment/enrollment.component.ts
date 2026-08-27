import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css'],
})
export class EnrollmentComponent {
  topics = ['Angular', 'React', 'Vue'];

  userData = new User('', '', '', '', '', false);

  fun(data: unknown): void {
    console.log(data);
  }
}
