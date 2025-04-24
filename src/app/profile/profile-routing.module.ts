import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { UpdateProfileComponent } from './component/update-profile/update-profile.component';

const routes: Routes = [  {
    path: "", component: ProfileComponent,
    children: [{ path: "update", component: UpdateProfileComponent, }]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
export const profileComponent = [ProfileComponent]
