import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

const routes: Routes = [  {
    path: "", component: TaskComponent,
    children: [{ path: "update", component: UpdateTaskComponent, }]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MytaskRoutingModule { }
