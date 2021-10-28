import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from 'src/_helpers/auth.interceptor';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgOtpInputModule } from  'ng-otp-input';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { LoginwithotpComponent } from './loginwithotp/loginwithotp.component';
import { MembershipcomponentComponent } from './membershipcomponent/membershipcomponent.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    VerifyEmailComponent,
    VerifyMobileComponent,
    VerifyotpComponent,
    LoginwithotpComponent,
    MembershipcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
    BrowserAnimationsModule,
    NgxIntlTelInputModule,
    FlatpickrModule.forRoot(),
    ReactiveFormsModule,
    NgOtpInputModule   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
