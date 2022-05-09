import { Component, VERSION } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  topics = ['Angular', 'React', 'Vue'];

  userData = new User(
    'Monu',
    'pturuk123@gmail.com',
    '8018640492',
    '',
    '',
    false
  );

  fun(data) {
    console.log(data);
  }
}
