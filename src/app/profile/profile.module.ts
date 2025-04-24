import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { profileComponent, ProfileRoutingModule } from './profile-routing.module';
import { UpdateProfileComponent } from './component/update-profile/update-profile.component';


@NgModule({
  declarations: [
    profileComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
