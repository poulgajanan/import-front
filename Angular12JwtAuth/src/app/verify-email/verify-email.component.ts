import { Component, OnInit } from '@angular/core';
import { OtpverifyService } from '../_services/otpverify.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  form: any={
    otp:null
  }
  isSuccessful=false;
  isVerificationFailed=false;
  errorMessage = '';
  value:any

  constructor(private sendOtp:OtpverifyService) { }

  ngOnInit(): void {
  }

  onOtpChange($event:any){
    if($event.length==4){
     this.value=$event
    }    
   }

  onSubmit(): void{          
      this.sendOtp.verifyEmail(this.value).subscribe(
       data => {
        //  console.log(data);
         this.isSuccessful = true;         
         this.isVerificationFailed = false;        
       },
       err => {
         this.errorMessage = err.error.message;
         this.isVerificationFailed = true;       
       }
      );    
  }


}
