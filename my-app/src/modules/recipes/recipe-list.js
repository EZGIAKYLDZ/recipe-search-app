
export const RecipeList = ({ recipes }) => {

    function handleClick(recipeId) {
        console.log('working' + recipeId);

    }

    return (
        recipes.length > 0 ? (
            <ul>
                {recipes.map((recipe) => (
                    <li onClick={() => handleClick(recipe.idMeal)} key={recipe.idMeal}>
                        {recipe.strMeal}
                    </li>
                ))}
            </ul>
        ) : (<></>)
    )
}
