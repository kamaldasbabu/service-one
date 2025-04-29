import { DataStoreService } from './../../../services/data-store.service';
import { BackendService } from './../../../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-list',
  standalone: false,
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent implements OnInit {
  hasContent: boolean = false;
  serviceList: any = undefined;

  searchForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    private _backendService: BackendService, private _dataStoreService: DataStoreService
  ) {
    this.searchForm = this.fb.group({
      searchText: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this._backendService.getData("/service").subscribe((data: any) => {
      console.log("daaa", data);
      this.serviceList = data;
      this.serviceList = this.serviceList.map((service: Record<string, any>, index: number) => {
        return { ...service, rating: index + 2 }
      })
      this._dataStoreService.serviceList = this.serviceList;


    })
  }

  searchServices() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.getRawValue()["searchText"]);
      const searchText = this.searchForm.getRawValue()["searchText"]

      this._backendService.getData(`/search/service/${searchText}`).subscribe((data: any) => {
        console.log("daaa", data);

      })
    }
  }


  view() {
    this.router.navigate(['view'], { relativeTo: this.route });
  }


  onActivate() {
    this.hasContent = true;
  }

  onDeactivate() {
    this.hasContent = false;
  }
}
