import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'https://dev.tre-zix.com/gatewaysrv/api/auth/';
const AUTH_API_LOGIN = 'https://dev.tre-zix.com/gatewaysrv/login/auth/signinwithotp';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginwithotp(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API_LOGIN + 'signinwithotp', {
      username,
      password
    }, httpOptions);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API_LOGIN + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(companyName: string, companyDesignation: string, firstName: string, lastName: string,dateOfBirth: string,
    email: string,mobile: string,password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      companyName,
      companyDesignation,
      firstName,
      lastName,
      dateOfBirth,
      email,
      mobile,
      password
    }, httpOptions);
  }

  checkAvailable(companyName: string, email: string, mobile: string): Observable<any> {
    return this.http.post(AUTH_API + 'checkavailble', {
      companyName,
      email,
      mobile     
    }, httpOptions);
  }
}
