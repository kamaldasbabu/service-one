import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../models/user-details';

@Component({
  selector: 'app-sing-up',
  standalone: false,
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {

  public signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private _authService: AuthService,
    private _router: Router
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Form Data:', this.signUpForm.value);
      this._authService.signUp(this.signUpForm.getRawValue()).subscribe((users: IUser) => {

        console.log("users", users);
        
        this._router.navigate(['/profile'], { queryParams: { id: 10 } });
      })
    }
  }

}
