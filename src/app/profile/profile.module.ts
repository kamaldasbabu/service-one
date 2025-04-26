import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { profileComponent, ProfileRoutingModule } from './profile-routing.module';
import { UpdateProfileComponent } from './component/update-profile/update-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    profileComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfileModule { }
