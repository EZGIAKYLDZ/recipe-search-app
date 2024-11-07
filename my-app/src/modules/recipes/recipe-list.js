import '../../App.css';

export const RecipeList = ({ recipes, handleShowRecipe }) => {
    return (
        recipes.length > 0 ? (
            <ul className='card-container'>
                {recipes.map((recipe) => (
                    <div className='card-product'>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
                        <li key={recipe.idMeal} onClick={() => handleShowRecipe(recipe.idMeal)}>
                            {recipe.strMeal}
                        </li>
                        {/* <p>{selectedRecipe}</p> 
                        {selectedRecipe.idMeal === recipe.idMeal ? 
                        <p>{selectedRecipe.strInstructions}</p> : <></>
                        } */}
                    </div>
                ))}
            </ul>
        ) : (<></>)
    )
}
