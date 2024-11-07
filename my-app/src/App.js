import { SearchBar } from './modules/recipes/search-bar';
import { fetchRecipesByIngredient } from './modules/recipes/recipeService';
import './App.css';
import { useState, useEffect } from 'react';
import { RecipeList } from './modules/recipes/recipe-list';

export const App = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetchRecipesByIngredient('chicken_breast').then((recipes) =>
			setRecipes(recipes.length > 0 ? recipes : []),
		);
	}, []);

	return (
		<div className='container'>
			<header>Recipe Search App</header>
			<SearchBar />
			<RecipeList recipes={recipes}/>
		</div>
	);
};