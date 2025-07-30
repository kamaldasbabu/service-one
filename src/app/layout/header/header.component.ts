import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(public _authService: AuthService) { }
  public userDetails: any = {};

  ngOnInit(): void {
    this._authService.userDetails$.subscribe(details => {
      console.log("details", details);
      this.userDetails = details;
    });
  }

}
