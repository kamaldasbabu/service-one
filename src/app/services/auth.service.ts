import { BehaviorSubject, Observable, Subject, subscribeOn } from 'rxjs';
import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _backendService: BackendService) { };

  initilaUserDetails = {
    name: "name",
    navigation: {
      dashboard: true,
      profile: true,
      services: true,
      signIn: true,
      subscription: true
    },
    subscription: {
      name: null,
      durationInDays:null,
      maximumBooking: null,
      price:null,
      planSubscribed: false
  }

  }
  private _userDetails = new BehaviorSubject<IUser>(this.initilaUserDetails);
  public userDetails$ = this._userDetails.asObservable();

  set userDetails(value: any) {
    this._userDetails.next(value);
  }

  get userDetails() {
    return this._userDetails.value;
  }

  // public userDetails: IUser | undefined = undefined;
  public token: string | null = localStorage.getItem("token");
  public singIn(userCredintial: Record<string, string>): Observable<any> {
    return this._backendService
      .saveData("/auth/login", userCredintial);
  }

  public signUp(userData: Record<string, string>): Observable<any> {
    return this._backendService
      .saveData("/auth/register", userData);
  }


}
