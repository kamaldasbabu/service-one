import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  standalone: false,
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent implements OnInit {

  public signInForm: FormGroup;

  constructor(private backendService: BackendService, private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form Data:', this.signInForm.value);
    }
  }

  async ngOnInit() {
    console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjj");

    this.backendService.getData("/posts").subscribe((data: any) => {
      console.log("data", data);

    });
    const resullt = await this.backendService.getDataPromise("/posts");
    console.log("result", resullt)
    
  }

}
