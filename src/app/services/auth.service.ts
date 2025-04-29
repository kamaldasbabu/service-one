import { Observable, Subject } from 'rxjs';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _backendService: BackendService) { };

  public userDetails: IUser | Object = {};
  public token : string | undefined = undefined;
  public singIn(userCredintial: Record<string, string>): Observable<any> {
    return this._backendService
      .saveData("/auth/login", userCredintial);
  }

  public signUp(userData: Record<string, string>): Observable<any> {
    return this._backendService
      .saveData("/auth/register", userData);
  }


}
