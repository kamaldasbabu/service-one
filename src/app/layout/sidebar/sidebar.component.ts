import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  constructor(private _authService: AuthService) { }
  navigationAccess: any = {}
  ngOnInit(): void {
    this._authService.userDetails$.subscribe(details => {
      console.log("details", details);
      this.navigationAccess = details.navigation;
    });
  }

}
