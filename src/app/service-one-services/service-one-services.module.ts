import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceOneServicesRoutingModule } from './service-one-services-routing.module';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceViewComponent } from './components/service-view/service-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceViewComponent
  ],
  imports: [
    CommonModule,
    ServiceOneServicesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ]
})
export class ServiceOneServicesModule { }
