import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiURL = environment.apiURL;

  constructor(private http:HttpClient) { }
  
  getIngredients(): Observable<any> {
    return this.http.get(`${this.apiURL}/ingredients`);
  }

  updateIngredient(id:number, ingredient:any): Observable<any> {
    return this.http.get(`${this.apiURL}/ingredients/update/${id}`, ingredient);
  }
  
  }
