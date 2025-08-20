import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private router: Router) { }

  public isSidebarCollapsed: boolean = true;
  public toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  public myDetails = new Subject<any>();

  public task = new BehaviorSubject<any>({});

  public serviceList: any[] = [];


  public activityFn(tableName: String, route: any, data: any) {
    switch (tableName) {
      case 'taskTable':
        this.task.next(data);
        this.router.navigate(['update'], { relativeTo: route, queryParams: { taskId: data.id } });
        break;

      default:
        break;
    }
  }





}
