import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-loginwithotp',
  templateUrl: './loginwithotp.component.html',
  styleUrls: ['./loginwithotp.component.css']
})
export class LoginwithotpComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  isOtpSent=false;
  errorMessage = '';
  roles: string[] = [];
  value ='';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  

  onSubmit(): void {
    const { mobile, otp } = this.form;

    this.authService.loginwithotp(mobile,otp).subscribe(
      data => { 
        console.log(data)       
        this.isOtpSent = true;       
      },
      err => {
        this.errorMessage = err.error.message;        
      }
    );
  }

  login() : void{
   
    const { mobile, otp } = this.form;

    this.authService.login(mobile,this.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

}
