import '../../../App.css';

export const RecipeList = ({recipes, handleShowRecipe, selectedRecipe }) => {

    return (
        <>
        {recipes.length > 0 ? (
            <ul className='card-container'>
                {recipes.map((recipe) => (
                    <div key={recipe.idMeal} className='card-product'>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} onClick={() => handleShowRecipe(recipe.idMeal)}></img>
                        <li className='recipe-name' onClick={() => handleShowRecipe(recipe.idMeal)}>
                            {recipe.strMeal}
                        </li>
                        {selectedRecipe.idMeal === recipe.idMeal ? 
                        <p>{selectedRecipe.strInstructions}</p> : <></>
                        }
                    </div>
                ))}
            </ul>
        ) : (
        <p className='no-recipes'>No Recipes found</p>
        )}
        </>
    )
}
