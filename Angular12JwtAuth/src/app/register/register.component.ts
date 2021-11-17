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

  // passwordPtn ="/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/";
  // passwordPtn = "/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{8,16}$";
  // passwordPtn = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/";
  // passwordPtn = "/^\+?(?:[1-9]\d*(?:\.\d{1,2})?|0\.(?:[1-9]\d?|\d[1-9]))$/";
  // passwordPtn "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  // passwordPtn = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3, }$";
  passwordPtn = "/^[0-9]{1,6}$/";


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
