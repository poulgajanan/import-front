import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL_verify = 'http://localhost:8090/email';
const APIL_verify = 'http://localhost:8090/sms';

@Injectable({
  providedIn: 'root'
})
export class OtpverifyService {

  constructor(private http: HttpClient) { }


  sendEmailOtp(email:any): Observable<any> {
    return this.http.get(`${API_URL_verify}/sendemail?email=${email}`);
  }

  verifyEmail(otp:any): Observable<any> {
    return this.http.get(`${API_URL_verify}/verifyEmail?otp=${otp}`);
  }

  sendMobileOtp(mobile:any): Observable<any> {
    return this.http.get(`${APIL_verify}/sendSms?mobile=${mobile}`);
  }

  verifyMobile(otp:any): Observable<any> {
    return this.http.get(`${APIL_verify}/verifyMobile?otp=${otp}`);
  }  
}
