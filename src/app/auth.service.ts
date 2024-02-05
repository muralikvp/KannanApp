import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiurl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  ProceedLogin(UserCred: any) {
    return this.http.post(this.apiurl, UserCred);
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') || '';
  }

  HaveAccess() {
    var role = localStorage.getItem('Role') || '';
    if (role == 'Admin') {
      return true;
    } else {
      alert('you not having access');
      return false;
    }
  }
}
