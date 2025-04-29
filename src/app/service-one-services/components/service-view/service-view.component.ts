import { formatDate } from '@angular/common';
import { BackendService } from './../../../services/backend.service';
import { DataStoreService } from './../../../services/data-store.service';
import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-service-view',
  standalone: false,
  templateUrl: './service-view.component.html',
  styleUrl: './service-view.component.css'
})
export class ServiceViewComponent implements OnInit {

  service: any = {};
  constructor(private route: ActivatedRoute, private router: Router,
    private _dataStoreService: DataStoreService,
    private _backendService: BackendService
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const name = paramMap.get('name');
      console.log('Route param name:', name);

      if (name) {
        this.service = this._dataStoreService.serviceList.find(el => el.name === name);
      }
    });
  }


  bookService(service: any) {
    const today = new Date();
    const formattedDate = formatDate(today, 'yyyy-MM-dd', 'en-IN');

    const payload = {
      "serviceMappingId": service.id || 1,
      "bookingStatus": "SUBMITTED",
      "price": 100,
      "bookingDate": formattedDate,
      "bookedDate": formattedDate,
      "bookingCompleteDate": formattedDate
    }

    console.log("payload", payload);



    this._backendService.saveData("/booking/book", payload).subscribe((response: any) => {
      this.router.navigate(["view"], { relativeTo: this.route });
    })
  }

}
