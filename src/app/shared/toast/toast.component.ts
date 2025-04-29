import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: false,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  toasts: { type: 'success' | 'error', message: string }[] = [];

  show(message: string, type: 'success' | 'error' = 'success') {
    this.toasts.push({ message, type });

    setTimeout(() => {
      this.toasts.shift();
    }, 3000);
  }

}
