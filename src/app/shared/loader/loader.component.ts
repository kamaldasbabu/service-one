import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {
  loading$: any;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loading$ = this.loaderService.loading$;
  }
}
