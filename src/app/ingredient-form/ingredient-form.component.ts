import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { PreferenceComponent } from '../preference/preference.component';


@Component({
  selector: 'app-ingredient-form',
  standalone: true,
  imports: [AppComponent, PreferenceComponent, ReactiveFormsModule],
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.scss'
})
export class IngredientFormComponent {

  ingredientForm: FormGroup;

  @Input() category!:string;

  constructor(private fb: FormBuilder) {
    this.ingredientForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(category:string) {
    if (this.ingredientForm.valid) {
     
      const ulList = document.getElementById(category);
     
      //récupère la valeur name du form
      let ingredientName = this.ingredientForm.get('name')?.value;

      const newItem = document.createElement('li');
      const newButton = document.createElement('button');
      newButton.type = 'button';
      newButton.classList.add('btn' ,'btn-sm');
      newButton.textContent = 'X';
      
      //id unique pour possibilité de supprimer l'élément 
      let uniqId = Date.now().toString();

      // nom de l'ingrédient + id unique
      const idItem = ingredientName+uniqId;

      //surveillance du clic pour suppression
      newButton.addEventListener('click', ()=> {
        this.deleteAddedIngredient(idItem);
      })

      newItem.textContent = ingredientName;

      //id
      newItem.id = idItem;
      //class
      newItem.classList.add('ingredient');
      //ajout du bouton
      newItem.appendChild(newButton);
     
      

      if(ulList){
        //ajoute le nom de l'ingrédient
        ulList.appendChild(newItem)

         // Efface le champ de saisie
        this.ingredientForm.get('name')?.reset();
      }

      }
    }

  //supprime un des élément temporaire ajoutés au dom par l'utilisateur
  deleteAddedIngredient(name:string){
    console.log(name);
    document.getElementById(name)?.remove();
      
  }


}
