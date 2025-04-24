import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  public isSidebarCollapsed: boolean = true;
  public toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  public myDetails = new Subject<any>();





}
