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




  userForm: FormGroup;

  constructor(private _dataStoreService: DataStoreService, private router: Router, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['KAMAL', Validators.required],
      lastName: ['Ruidas', Validators.required],
      age: [30, [Validators.required, Validators.min(0)]],
      address: this.fb.group({
        vill: ['Shyamsundarpur', Validators.required],
        po: ['713141', Validators.required],
        state: ['WB', Validators.required]
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
