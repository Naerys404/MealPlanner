import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  private apiURL = 'https://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiURL}/categories`);
  }

  updateIngredient(id:number, category:any): Observable<any> {
    return this.http.get(`${this.apiURL}/categories/update/${id}`, category);
  }

}
