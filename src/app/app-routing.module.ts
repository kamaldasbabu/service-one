import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';

const routes: Routes = [
  { path: "", component: SingInComponent },
  { path: "sign-in", component: SingInComponent },
  { path: "sign-up", component: SingUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  SingInComponent,
  SingUpComponent,
  LayoutComponent,
  SidebarComponent,
  FooterComponent
]
