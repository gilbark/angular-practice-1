import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService) { }
    // ingredientsToShoppingList = new EventEmitter<Ingredient[]>();
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Burger',
            'Burger',
            'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe('Amazing Schnitzel',
            'Schnitzel',
            'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ])
    ];


    getRecipes() {
        // calling the slice() method with no arguments in order to return a copy of the same array 
        // so we won't be able to make changes to it
        return this.recipes.slice();
    }

    addFromRecipeToShoppingList(ingredients: Ingredient[]) {
        ingredients.forEach(ingredient => {
            this.slService.addIngredient(ingredient);
        });
    }

}
