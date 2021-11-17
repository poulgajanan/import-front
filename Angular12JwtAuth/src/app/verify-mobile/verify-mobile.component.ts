import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtpverifyService } from '../_services/otpverify.service';

@Component({
  selector: 'app-verify-mobile',
  templateUrl: './verify-mobile.component.html',
  styleUrls: ['./verify-mobile.component.css']
})
export class VerifyMobileComponent implements OnInit {

  form: any = {
    companyName: null,
    companyDesignation:null,
    firstName:null,
    lastName:null,
    dateOfBirth: null,
    email: null,
    mobile:null,
    password: null,
    confirmPassword: null  
  }
  isSuccessful=false;
  isVerificationFailed=false;
  errorMessage = '';
  value:any

  constructor(private router: Router,private sendOtp:OtpverifyService) { }

  ngOnInit(): void {
  }

  
  onOtpChange($event:any){
    if($event.length==4){
     this.value=$event
    }    
   }

  onSubmit(): void{ 
    const {companyName,companyDesignation,firstName,lastName,dateOfBirth,email,mobile,password,} = this.form;         
      this.sendOtp.verifyMobile(this.value).subscribe(
       data => {
        //  console.log(data);
         this.isSuccessful = true;         
         this.isVerificationFailed = false; 
         this.router.navigateByUrl('/verifyEmail')       
       },
       err => {
         this.errorMessage = err.error.message;
         this.isVerificationFailed = true;       
       }
      );    
  }

  sendEmailOtp(): void{
    
  }
}
