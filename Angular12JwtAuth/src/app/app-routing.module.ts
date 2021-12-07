import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOtpInputModule } from  'ng-otp-input';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginwithotpComponent } from './loginwithotp/loginwithotp.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import { OtpComponent } from './otp/otp.component';
import { OtpmailComponent } from './otpmail/otpmail.component';
import { authInterceptorProviders } from 'src/_helpers/auth.interceptor';
// import { SignupComponent } from  './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

// ------------------------------------------------------MASTER-----------------------------------------------------------//
import { CompanysetupComponent } from './master/companysetup/companysetup.component';
import { PortComponent } from './master/port/port.component';
import { LicenseComponent } from './master/license/license.component';
import { CurrencysettingsComponent } from './master/currencysettings/currencysettings.component';
import { BusineespartnerComponent } from './master/busineespartner/busineespartner.component';
import { BankimportComponent } from './master/bankimport/bankimport.component';
import { DocumentComponent }  from './master/document/document.component';

// ------------------------------------------------------IMPORT-----------------------------------------------------------//
import { PlanningComponent } from './imports/planning/planning.component';
import { VendorComponent } from './imports/vendor/vendor.component';
import { EditvendorComponent } from './imports/vendor/editvendor/editvendor.component';
import { MailComponent } from './imports/vendor/mail/mail.component';
import { BankComponent } from './imports/bank/bank.component';
import { GeneratepoComponent } from './imports/generatepo/generatepo.component';
import { GeneratepopaymentComponent } from './imports/generatepo/generatepopayment/generatepopayment.component';
import { LetterofcreditComponent } from './imports/letterofcredit/letterofcredit.component';
import { ThirdpartyinspectionComponent } from './imports/thirdpartyinspection/thirdpartyinspection.component'


import { MembershipcomponentComponent } from './membershipcomponent/membershipcomponent.component';
import { AddformComponent } from './addform/addform.component';
import { PlansComponent } from './plans/plans.component';
import { TableComponent } from './table/table.component';

import { VesseltrackingComponent } from './vesseltracking/vesseltracking.component';



import { PieChartComponent } from './pie-chart/pie-chart.component';
// import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: HomeComponent},   
    {path: 'login', component: LoginComponent},
    {path: 'register' , component: RegisterComponent},
    // {path: 'otp', component: OtpComponent},
    // {path: 'otpmail', component: OtpmailComponent},
    // {path: 'signup', component: SignupComponent},
    // ------------------------------------------------------MASTER ROUTERS-----------------------------------------------------------//
    {path: 'master-companysetup', component: CompanysetupComponent},
    {path: 'master-port',component: PortComponent},
    {path: 'master-license',component: LicenseComponent},
    {path: 'master-curency', component:CurrencysettingsComponent},
    {path: 'master-busineespartner',component: BusineespartnerComponent},
    {path: 'master-bank', component: BankComponent},
    {path: 'master-document', component: DocumentComponent},
    // ------------------------------------------------------IMPORT ROUTERS-----------------------------------------------------------//
    {path: 'import-planning', component: PlanningComponent},
    {path: 'import-vendor', component: VendorComponent},
    {path: 'import-vendor-editvendor',component: EditvendorComponent},    
    {path: 'import-vendor-mail', component: MailComponent},
    {path: 'import-generatepo', component: GeneratepoComponent},
    {path: 'import-generatepo-generatepopayment', component: GeneratepopaymentComponent},
    {path: 'import-letterofcredit', component: LetterofcreditComponent},
    {path: 'import-bankimport' , component: BankimportComponent},
    {path: 'import-third_party_inspection', component: ThirdpartyinspectionComponent },
    // -----------------------------------------------------------------------------------------------------------------------------//
    {path: 'vesseltracking', component: VesseltrackingComponent},
    {path: 'addform', component: AddformComponent},
    {path: 'table', component: TableComponent},    
    {path: 'plans', component: PlansComponent},
    {path: 'document', component: DocumentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
