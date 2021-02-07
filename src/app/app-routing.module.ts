import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddprofileComponent } from './pages/addprofile/addprofile.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path : "", component : HomeComponent
  },
  {
    path : "add-profile", component : AddprofileComponent
  },
  {
    path : "profile/:id", component : ProfileComponent
  },
  {
    path : "edit-profile/:id", component : EditprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
