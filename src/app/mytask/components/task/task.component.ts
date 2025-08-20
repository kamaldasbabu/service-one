import { DataStoreService } from './../../../services/data-store.service';
import { BackendService } from './../../../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  public hasContent: boolean = false;
  public taskList: any[] = [];
  constructor(private router: Router, public route: ActivatedRoute, private _backendService: BackendService,
    private _dataStoreService: DataStoreService
  ) { }


  ngOnInit(): void {
    this._backendService.getData("/task").subscribe((task: any) => {
      console.log("taskkk", task)
      this.taskList = task;
      
    })
  }

  onActivate() {
    this.hasContent = true;
  }

  onDeactivate() {
    this.hasContent = false;
  }

  onUpate(task: any): void {

    console.log("task.taskId ", task.id );
    this._dataStoreService.task.next(task);
    this.router.navigate(['update'], { relativeTo: this.route, queryParams: { taskId: task.id } });
  }
}
