import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [  {
    path: "", component: ProfileComponent,
    children: [{ path: "update", component: ProfileComponent }]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
export const profileComponent = [ProfileComponent]
