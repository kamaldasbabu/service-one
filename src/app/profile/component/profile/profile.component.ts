import { DataStoreService } from './../../../services/data-store.service';
import { BackendService } from './../../../services/backend.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  public myDetails = {
    firstName: "KAMAL",
    lastName: "Ruidas",
    age: 30,
    address: {
      vill: "Shyamsundarpur",
      po: "713141",
      state: "WB"
    }
  }

  constructor(private router: Router, private _dataStoreService: DataStoreService) {
  }

  public updateProfile(): void {

    console.log("update profile");
    this._dataStoreService.myDetails.next(this.myDetails);
    this.router.navigate(['/profile/update']);
  }

}
