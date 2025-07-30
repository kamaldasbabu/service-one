import { Router } from '@angular/router';
import { DataStoreService } from './../../../services/data-store.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  standalone: false,
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit {

  public myDetails: any | undefined;

  public userForm: FormGroup;
  constructor(private _dataStoreService: DataStoreService, private router: Router, 
      private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      contact: ["", [Validators.required]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      })
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }


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
