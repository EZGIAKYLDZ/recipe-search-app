import { useState } from 'react';
import '../../../App.css';
import { searchRecipeByName } from '../recipeService';
import { RECIPE_ACTIONS, useRecipesDispatch } from '../recipesProvider';

export const SearchBar = () => {
	const [query, setQuery] = useState('');
	const dispatch = useRecipesDispatch();

	function handleChange(e) {
		setQuery(e.target.value.trim());
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const recipes = await searchRecipeByName(query);
		dispatch({ 
			type: RECIPE_ACTIONS.update, 
			payload: recipes })
		console.log(recipes);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input className='search-input'
				onChange={handleChange}
				aria-label='Recipe search'
				placeholder='Search for recipes...'
			/>
		</form>
	);
};