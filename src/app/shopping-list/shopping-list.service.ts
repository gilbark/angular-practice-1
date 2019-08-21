import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();


    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];


    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        for (let ing of this.ingredients) {
            if (ing.name === ingredient.name) {
                // ing.amount = ing.amount + ingredient.amount.valueOf();
                ing.amount =  ing.amount + ingredient.amount;
                console.log(ing.amount);
                return;
            }
        }
        this.ingredients.push(ingredient);

        this.ingredientsChanged.emit(this.ingredients.slice());
    }


}
