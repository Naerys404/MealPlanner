import { Component, Input } from '@angular/core';
import { TIMESHEET, WEEK } from '../../db-data';
import { PreferenceComponent } from '../preference/preference.component';
import { AppComponent } from '../app.component';
import { Menu } from '../model/food';
import { MenusService } from '../services/menus.service';



@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [PreferenceComponent, AppComponent],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss'
})

export class PlanningComponent{
  
  constructor(private menusService:MenusService){
    this.menusService.menus$.subscribe((menus) =>{
      this.menus = menus
    });
  }


  title = 'Planning' 
  week = WEEK
  timesheet = TIMESHEET 
  menus: Menu[] = [];
  



}
