import { MytaskModule } from './mytask/mytask.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "", component: SingInComponent },
  { path: "sign-in", component: SingInComponent },
  { path: "sign-up", component: SingUpComponent },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./service-one-services/service-one-services-routing.module').then(m => m.ServiceOneServicesRoutingModule)
  },
  {
    path: 'subscription',
    // canActivate: [authGuard],
    loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule)
  },
  {
    path: 'task',
    // canActivate: [authGuard],
    loadChildren: () => import('./mytask/mytask.module').then(m => m.MytaskModule)
  },
  { path: '**', redirectTo: 'sign-in' },
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
