import { DataStoreService } from './../../../services/data-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: false,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent implements OnInit {
  @Input() service: any;

  constructor(private _router: Router, private _route: ActivatedRoute,
    private _dataStoreService: DataStoreService) { }

  ngOnInit(): void {
    console.log(this.service);

  }




  bookService(service: any): void {
    this._router.navigate(['view', service.name], { relativeTo: this._route });
  }
}
