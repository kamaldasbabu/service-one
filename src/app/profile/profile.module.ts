import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { profileComponent, ProfileRoutingModule } from './profile-routing.module';
import { UpdateProfileComponent } from './component/update-profile/update-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    profileComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class ProfileModule { }
