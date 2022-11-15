import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from "src/app/account/change-password/change-password.component";
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'account',
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profil'
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        title: 'Ganti Kata Sandi'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
