import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceViewComponent } from './components/service-view/service-view.component';

const routes: Routes = [{
  path: '', component: ServiceListComponent,
  children: [{
    path: 'view/:name', component: ServiceViewComponent
  }]

},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceOneServicesRoutingModule { }
