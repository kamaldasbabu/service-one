import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, tap, throwError } from 'rxjs';
import { SaveForm } from '../models/save-form';
import { ToastService } from '../shared/toast.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // public apiUrl: string = "https://jsonplaceholder.typicode.com/";
  public apiUrl: string = "http://localhost:8080/api";
  constructor(private http: HttpClient, private _toastService: ToastService) { }

  /**
   * saveForm retrun observable
   * @param formData 
   * @returns 
   */

  // public saveData(formData: SaveForm): Observable<any> {
  //   return this.http.post(this.apiUrl, formData);
  // }
  // public saveData(url: string, formData: any): Observable<any> {
  //   return this.http.post(this.apiUrl+url, formData);
  // }


  // constructor(private http: HttpClient, private toastService: ToastService) {}

  public saveData(url: string, formData: any): Observable<any> {
    return this.http.post(this.apiUrl + url, formData).pipe(
      tap((response: any) => {
        const message = response?.message || 'Data saved successfully';
        this._toastService.show(message, 'success');
      }),
      catchError((error: any) => {
        const message = error?.error?.message || 'Something went wrong';
        this._toastService.show(message, 'error');
        return throwError(() => error);
      })
    );
  }
  


  /**
   * getData retrun observable
   * @param formData 
   * @returns 
   */

  public getData(endpoint: string): Observable<any> {

    console.log("this.apiUrl + endpoint", this.apiUrl + endpoint);

    return this.http.get(this.apiUrl + endpoint);
  }


  public getDataPromise(endpoint: string, params: any = {}): Promise<any> {
    const url = `${this.apiUrl}${endpoint}`;

    console.log("GET:", url, "Params:", params);

    return firstValueFrom(this.http.get(url, { params }));
  }

  /**
   * saveFormPromise function API save form Promise
   * @param formData 
   * @returns Promise
   */
  public saveDataPromise(formData: SaveForm): Promise<any> {
    return firstValueFrom(this.http.post(this.apiUrl, formData));
  }
}
