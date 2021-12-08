import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { OtpmailComponent } from './otpmail/otpmail.component';

import { HomeComponent } from './home/home.component';

// ------------------------------------------------------MASTER-----------------------------------------------------------//
import { CompanysetupComponent } from './master/companysetup/companysetup.component';
import { LicenseComponent } from './master/license/license.component';
import { PortComponent } from './master/port/port.component';
import { CurrencysettingsComponent } from './master/currencysettings/currencysettings.component';
import { BusineespartnerComponent } from './master/busineespartner/busineespartner.component';
import { BankimportComponent } from './master/bankimport/bankimport.component';
import { DocumentComponent } from './master/document/document.component';

// ------------------------------------------------------IMPORT-----------------------------------------------------------//
import { PlanningComponent } from './imports/planning/planning.component';
import { VendorComponent } from './imports/vendor/vendor.component';
import { EditvendorComponent } from './imports/vendor/editvendor/editvendor.component';
import { MailComponent } from './imports/vendor/mail/mail.component';
import { GeneratepoComponent } from './imports/generatepo/generatepo.component';
import { GeneratepopaymentComponent } from './imports/generatepo/generatepopayment/generatepopayment.component';
import { LetterofcreditComponent } from './imports/letterofcredit/letterofcredit.component';
import { BankComponent } from './imports/bank/bank.component';
import { ThirdpartyinspectionComponent } from './imports/thirdpartyinspection/thirdpartyinspection.component';

// ------------------------------------------------------EXPORT-----------------------------------------------------------//


import { VesseltrackingComponent } from './vesseltracking/vesseltracking.component';
import { MembershipcomponentComponent } from './membershipcomponent/membershipcomponent.component';

// import { AddformComponent } from './addform/addform.component';
// import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: HomeComponent},   
  {path: 'login', component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'otp', component: OtpComponent},
  {path: 'otpmail', component: OtpmailComponent},
  // ------------------------------------------------------MASTER ROUTERS-----------------------------------------------------------//
  {path: 'master-companysetup', component: CompanysetupComponent},
  {path: 'master-license',component: LicenseComponent},
  {path: 'master-port',component: PortComponent},
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
  // ------------------------------------------------------EXPORT ROUTERS-----------------------------------------------------------//


  // -----------------------------------------------------------------------------------------------------------------------------//
  {path: 'vesseltracking', component: VesseltrackingComponent},
  {path: 'membership', component: MembershipcomponentComponent},

  // {path: 'addform', component: AddformComponent},
  // {path: 'table', component: TableComponent}    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
