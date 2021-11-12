import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginwithotpComponent } from './loginwithotp/loginwithotp.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import { authInterceptorProviders } from 'src/_helpers/auth.interceptor';
import { BoardUserComponent } from './board-user/board-user.component';
// import { SignupComponent } from  './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgOtpInputModule } from  'ng-otp-input';
import { MembershipcomponentComponent } from './membershipcomponent/membershipcomponent.component';
import { AddformComponent } from './addform/addform.component';
import { GeneratepoComponent } from './generatepo/generatepo.component';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { OtpComponent } from './otp/otp.component';
import { PlanningComponent } from './planning/planning.component';
import { OtpmailComponent } from './otpmail/otpmail.component';
import { PlansComponent } from './plans/plans.component';
import { TableComponent } from './table/table.component';
import { VendorComponent } from './vendor/vendor.component';
import { CompanysetupComponent } from './master/companysetup/companysetup.component';
import { PortComponent } from './master/port/port.component';
import { LicenseComponent } from './master/license/license.component';
import { CurrencysettingsComponent } from './master/currencysettings/currencysettings.component';
import { BusineespartnerComponent } from './master/busineespartner/busineespartner.component';
import { BankComponent } from './master/bank/bank.component';
import { NavbarComponent } from './navbar/navbar.component';

import { PieChartComponent } from './pie-chart/pie-chart.component';
// import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: HomeComponent},
    // {path: 'otp', component: OtpComponent},
    // {path: 'otpmail', component: OtpmailComponent},
    // {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register' , component: RegisterComponent},
    {path: 'planning', component: PlanningComponent},     
    {path: 'addform', component: AddformComponent},
    {path:'editvendor',component: EditvendorComponent},
    {path: 'generatepo', component: GeneratepoComponent},
    {path: 'table', component: TableComponent},
    {path: 'vendor', component: VendorComponent},
    {path: 'plans', component: PlansComponent},
    {path: 'master/companysetup', component: CompanysetupComponent},
    {path: 'master/port',component: PortComponent},
    {path: 'master/license',component: LicenseComponent},
    {path: 'master/curency', component:CurrencysettingsComponent},
    {path: 'master/busineespartner',component: BusineespartnerComponent},
    {path: 'master/bank', component: BankComponent},
    {path: 'master/license',component: LicenseComponent},
    {path: 'master/curency', component:CurrencysettingsComponent},
    {path: 'master/busineespartner',component: BusineespartnerComponent},
    {path : 'pie-chart',component: PieChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
