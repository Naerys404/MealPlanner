import { Component, Input, Output } from '@angular/core';
import { Menu, TypeOfFood } from '../model/food';
import { AppComponent } from '../app.component';
import { PlanningComponent } from '../planning/planning.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IngredientService } from '../services/ingredient.service';
import { CategoriesService } from '../services/categories.service';
import { WEEK} from '../../db-data';
import { MenusService } from '../services/menus.service';
import { faBurger, faCarrot, faWheatAwn, faFishFins, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';


@Component({
  selector: 'app-preference',
  standalone: true,
  imports: [AppComponent, PlanningComponent, ReactiveFormsModule, FontAwesomeModule, IngredientFormComponent],
  templateUrl: './preference.component.html',
  styleUrl: './preference.component.scss'
})
export class PreferenceComponent {

  constructor(private ingredientService:IngredientService, private categoriesService:CategoriesService, private menusService:MenusService){}

  ingredients:any[] = [];
  categories:any[] = [];
  week = WEEK

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe(data => {
      this.ingredients = data;
    });
    
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    })

  }

  foodName = new FormControl();

  activeIndex = -1;

  category!:string;

  meals:any[] = [];
  randomFoods:any = [];


  //variable! signifie que la variable ne sera pas initialisée immediatement
  @Input()
  menus!: Menu[];
  
  // retourne l'icone appropriée pour chaqe catégorie
  getIconForCategory(name:string){
    switch(name){
      case 'Légumes':
        return faCarrot;
    
      case 'Protéines':
        return faFishFins;

      case 'Féculents':
        return faWheatAwn;

      case 'Plat Préparé':
        return faBurger;

      default:
        return faBowlFood;
       
    }
  }

  //ouverture de l'accordeon
  toggleActive(index:number){
    this.activeIndex = (this.activeIndex === index) ? -1 : index;
  }


  //supprime un ingrédient de la liste ( asynchrone et temporaire ) => génération du menu sans l'aliment supprimé
  deleteIngredient(id:number){
      document.getElementById(`ingredient-${id}`)?.remove();
  }

 

  generate():void{
    
      //reset du planning à chaque clic
      this.meals=[];

      //pour chaque jour
      for(let day of this.week){
        const lunchMenu = this.generateMenu();
        const dinnerMenu = this.generateMenu();
        //on push le menu du midi et du soir
        this.meals.push({day, lunch: lunchMenu, dinner: dinnerMenu})
       
      }
      //update des data via menuservice
      this.menusService.updateMenus(this.meals)
 
    }

    //selection d'un ingredient au hasard
    getRandomIngredient(ingredients : NodeListOf<Element>): Element | null {
      const ingredientCount = ingredients.length;
      if(ingredientCount === 0) {
        return null;
      }

      const randomIndex = Math.floor(Math.random()*ingredientCount);

      return ingredients[randomIndex];
    }

  //selection d'un ingrédient pour chaque catégorie et chaque ingrédient dans le dom   
  generateMenu():string[] {

    this.randomFoods = []

    //les categories présentes dans le dom
    const categories = document.querySelectorAll('.cat');
    

      //pour chaque catégorie
    categories.forEach(category => {
        
      let cat = category.querySelector('.catName');
      // console.log(cat)

          
      //nodes contenant chacun une liste d'ingrédients
      let ingredientsByCat = category.querySelectorAll('.ingredient');
          
      const randomIngredient = this.getRandomIngredient(ingredientsByCat);

      if(randomIngredient) {
        let ingredient = randomIngredient.firstChild
        let ingredientName = ingredient?.nodeValue

          
        this.randomFoods.push(ingredientName);
          
      }


    })

    return this.randomFoods;
   
  }
  

  

}  


