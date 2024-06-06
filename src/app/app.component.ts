import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { PreferenceComponent } from './preference/preference.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      CommonModule,
      RouterOutlet,
      PlanningComponent,
      PreferenceComponent, 
      FontAwesomeModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'Meal Planner - Votre menu de la semaine en un seul clic';


// Créer un tableau pour stocker les aliments aléatoires sélectionnés

  // randomFoods:any = [];

  // menus!: Menu[];

}


