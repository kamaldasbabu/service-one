import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveForm } from '../../models/save-form';
import { IUser } from '../../models/user-details';

@Component({
  selector: 'app-sing-in',
  standalone: false,
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent implements OnInit {

  public signInForm: FormGroup;

  constructor(private _router: Router,
    private _authService: AuthService,
    private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form Data:', this.signInForm.value);
      this._authService
        .singIn(this.signInForm.getRawValue())
        .subscribe((user: IUser) => {
          console.log("user", user);

          this._authService.userDetails = { userName: this.signInForm.getRawValue()["userName"], ...user };
          this._authService.userDetails = { ...this._authService.userDetails, ...user };
          this._authService.token = user.token;
          this._router.navigate(['/profile'], { queryParams: { userName: this.signInForm.getRawValue()["userName"] } });

        })


    }
  }

  async ngOnInit() {

    // this.backendService.getData("/health").subscribe((data: any) => {
    //   console.log("data", data);

    // });


    // this.backendService.saveData("/auth/register", {
    //   "password": "1234",
    //   "userName": "user",
    //   "name": "user1"}
    // ).subscribe((data: any) => {
    //   console.log("data", data);

    // });
    // const resullt = await this.backendService.getDataPromise("/posts");
    // console.log("result", resullt)

  }

}
