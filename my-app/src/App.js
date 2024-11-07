import { SearchBar } from './modules/recipes/search-bar';
import { fetchRecipesByIngredient } from './modules/recipes/recipeService';
import './App.css';
import { useState, useEffect } from 'react';
import { RecipeList } from './modules/recipes/recipe-list';
import { fetchRecipesById } from './modules/recipes/recipeService';

export const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setselectedRecipe] = useState([]);

  useEffect(() => {
    fetchRecipesByIngredient('chicken_breast').then((recipes) =>
      setRecipes(recipes.length > 0 ? recipes : []),
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
      <SearchBar />
        <RecipeList selectedRecipe={selectedRecipe} recipes={recipes} handleShowRecipe={handleShowRecipe} />
    </div>
    </div>
  );
};