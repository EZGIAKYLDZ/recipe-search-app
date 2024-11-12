import { SearchBar } from './modules/recipes/search-bar/index';
import { fetchRecipesByIngredient } from './modules/recipes/recipeService';
import './App.css';
import { useState, useEffect } from 'react';
import { RecipeList } from './modules/recipes/recipe-list/recipe-list';
import { fetchRecipesById } from './modules/recipes/recipeService';
import { RECIPE_ACTIONS, useRecipes, useRecipesDispatch } from './modules/recipes/recipesProvider';
import { AppRouter } from './AppRouter';

export const App = () => {
  const [selectedRecipe, setselectedRecipe] = useState([]);
  const recipes = useRecipes();
  const dispatch = useRecipesDispatch();

  useEffect(() => {
    fetchRecipesByIngredient('chicken_breast').then((recipes) =>
      dispatch({
        type: RECIPE_ACTIONS.update,
        payload: recipes
      })
    );
  }, []);

  const handleShowRecipe = (idMeal) => {
    console.log('working,', idMeal)

    fetchRecipesById(idMeal)
      .then(
        (recipeDetails) => setselectedRecipe(recipeDetails))
  }

  return (
    <div className='container'>
      <div className='search-bar'>
        <header>Recipe Search App</header>
        <AppRouter />
        <SearchBar />
        <RecipeList selectedRecipe={selectedRecipe} recipes={recipes} handleShowRecipe={handleShowRecipe} />
      </div>
    </div>
  );
};