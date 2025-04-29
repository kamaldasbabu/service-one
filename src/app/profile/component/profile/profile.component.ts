import { DataStoreService } from './../../../services/data-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  public hasContent: boolean = false;
  public userForm: FormGroup;

  constructor(private router: Router, private _dataStoreService: DataStoreService,
    private route: ActivatedRoute,
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

  
    this.router.navigate(['/profile/update']);
  }

  public updateProfile(): void {
    console.log("update profile");
    this.router.navigate(['update'], { relativeTo: this.route });
  }

 

onActivate() {
  this.hasContent = true;
}

onDeactivate() {
  this.hasContent = false;
}

}
