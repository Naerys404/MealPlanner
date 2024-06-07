import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private apiURL = 'https://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }
  
  getIngredients(): Observable<any> {
    return this.http.get(`${this.apiURL}/ingredients`);
  }

  updateIngredient(id:number, ingredient:any): Observable<any> {
    return this.http.get(`${this.apiURL}/ingredients/update/${id}`, ingredient);
  }
  
  }
