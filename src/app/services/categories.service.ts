import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  private apiURL = environment.apiURL;

  constructor(private http:HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiURL}/categories`);
  }

  updateIngredient(id:number, category:any): Observable<any> {
    return this.http.get(`${this.apiURL}/categories/update/${id}`, category);
  }

}
