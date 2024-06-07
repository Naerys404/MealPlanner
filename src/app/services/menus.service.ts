import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../model/food';

@Injectable({
  providedIn: 'root'
})

export class MenusService {

  constructor() { }

  private menuSubject = new BehaviorSubject<Menu[]>([]);

  menus = this.menuSubject.asObservable();

  animateClass:boolean = false;

  updateMenus(menus: Menu[]):void {

    //maj des menu
    this.menuSubject.next(menus);

      const animatedDiv = document.querySelectorAll(".mealTimesheets");
      animatedDiv.forEach((div)=>{
        div.classList.remove('animate');
        setTimeout(() => {
          div.classList.add('animate');
        }, 5); 
    
      })

  }



}
