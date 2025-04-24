import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { profileComponent, ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [
    profileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
