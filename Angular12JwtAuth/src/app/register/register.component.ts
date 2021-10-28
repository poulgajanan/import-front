import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

import { Router } from '@angular/router';
import { OtpverifyService } from '../_services/otpverify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    companyName: null,
    companyDesignation:null,
    firstName:null,
    lastName:null,
    dateOfBirth: null,
    email: null,
    mobile:null,
    password: null,
    confirmPassword:null    
  }
  isSuccessful = false; 
  isSignUpFailed = false;
  isSuccess =false;
  errorMessage = ''; 

  constructor(private router: Router,private authService: AuthService,private sendotp: OtpverifyService) { }

  ngOnInit(): void {   
  } 
 

   onSubmit(): void{
    const {companyName,companyDesignation,firstName,lastName,dateOfBirth,email,mobile,password,} = this.form;
    this.authService.checkAvailable(companyName, email, mobile).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;         
        this.isSignUpFailed = false;
        this.sendMessage();
        this.sendEmail();              
        this.router.navigateByUrl('/verifyMobile',{state: this.form})
        this.register();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;       
      }
    );
   }

   sendMessage(): void{
    const {companyName,companyDesignation,firstName,lastName,dateOfBirth,email,mobile,password,} = this.form;
    this.sendotp.sendMobileOtp(mobile).subscribe(
      data => {
        console.log(data);       
        this.isSuccess=true;       
        this.isSignUpFailed = false;       
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;       
      }
    );
   }

   sendEmail(): void{
    const {companyName,companyDesignation,firstName,lastName,dateOfBirth,email,mobile,password,} = this.form;
    this.sendotp.sendEmailOtp(email).subscribe(
      data => {
        console.log(data);       
        this.isSuccess=true;       
        this.isSignUpFailed = false;       
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;       
      }
    );
   }

   register(): void{
    const {companyName,companyDesignation,firstName,lastName,dateOfBirth,email,mobile,password} = this.form;
    this.authService.register( companyName,companyDesignation,firstName,lastName,dateOfBirth,email,mobile,password).subscribe(
      data => {
        console.log(data);       
        this.isSuccess=true;       
        this.isSignUpFailed = false;       
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;       
      }
    );
   }
}
