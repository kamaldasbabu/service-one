import { Router } from '@angular/router';
import { DataStoreService } from './../../../services/data-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  standalone: false,
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit{

  public myDetails : any | undefined;

constructor(private _dataStoreService: DataStoreService, private router: Router) {}
  ngOnInit(): void {

    this._dataStoreService.myDetails.subscribe((data) => {
      this.myDetails = data;
      console.log(this.myDetails);
    
    })

    
  }
  public updateProfile(): void {

    console.log("update profile");
    // this._dataStoreService.myDetails.next(this.myDetails);
    this.router.navigate(['/profile']);
  }

}
