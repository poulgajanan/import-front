import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { LoginwithotpComponent } from './loginwithotp/loginwithotp.component';
import { MembershipcomponentComponent } from './membershipcomponent/membershipcomponent.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'loginwithotp', component: LoginComponent },
  { path: 'login', component: LoginwithotpComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'verifyMobile', component: VerifyMobileComponent},
  { path: 'verifyEmail', component: VerifyEmailComponent},
  { path: 'membership', component: MembershipcomponentComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
