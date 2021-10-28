import { Component, OnInit } from '@angular/core';
import { OtpverifyService } from '../_services/otpverify.service';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {

  constructor(private sendOtp: OtpverifyService) { }

  ngOnInit(): void {
  
  }

}
