import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  responsedata: any;

  constructor(private authService: AuthService) {}

  Login = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  ProceedLogin() {
    console.log(this.Login.value);
    this.authService.ProceedLogin(this.Login.value).subscribe((data) => {
      if (data != null) {
        this.responsedata = data;
        localStorage.setItem('token', this.responsedata.token);
        localStorage.setItem('Role', 'Admin');
        console.log('Sucess');
      }
    });

    console.log('After Subscription');
    console.log('Hope Tutors');
  }
}
