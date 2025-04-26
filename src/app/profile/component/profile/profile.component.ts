import { DataStoreService } from './../../../services/data-store.service';
import { BackendService } from './../../../services/backend.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public userForm: FormGroup;

  constructor(private router: Router, private _dataStoreService: DataStoreService,
  private fb: FormBuilder) {
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
    this.userForm.disable();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form is invalid');
    }

    console.log("update profile");
    this._dataStoreService.myDetails.next(this.myDetails);
    this.router.navigate(['/profile/update']);
  }

  public updateProfile(): void {

    console.log("update profile");
    this._dataStoreService.myDetails.next(this.myDetails);
    this.router.navigate(['/profile/update']);
  }

}
