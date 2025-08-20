import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytaskRoutingModule } from './mytask-routing.module';
import { TaskComponent } from './components/task/task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewTableComponent } from '../shared/view-table/view-table.component';


@NgModule({
  declarations: [
    TaskComponent,
    UpdateTaskComponent,
    ViewTableComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MytaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MytaskModule { }
