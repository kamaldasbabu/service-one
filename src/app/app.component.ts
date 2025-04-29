import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ToastComponent } from './shared/toast/toast.component';
import { ToastService } from './shared/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'service-one-frontend';

  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  constructor(private _toastService: ToastService) { }

  ngAfterViewInit(): void {
    this._toastService.register(this.toastComponent);
  }
}
