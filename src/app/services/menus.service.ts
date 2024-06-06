import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../model/food';

@Injectable({
  providedIn: 'root'
})

export class MenusService {

  constructor() { }

  private menuSubject = new BehaviorSubject<Menu[]>([]);
  menus$ = this.menuSubject.asObservable();

  updateMenus(menus: Menu[]):void {
    this.menuSubject.next(menus);
  }
}
