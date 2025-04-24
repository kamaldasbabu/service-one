import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { SaveForm } from '../models/save-form';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public apiUrl: string = "https://jsonplaceholder.typicode.com/"
  constructor(private http: HttpClient) { }

  /**
   * saveForm retrun observable
   * @param formData 
   * @returns 
   */

  public saveData(formData: SaveForm): Observable<any> {
    return this.http.post(this.apiUrl, formData);
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
