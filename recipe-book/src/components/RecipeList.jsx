import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onDeleteRecipe}) {
    if (recipes.length === 0) {
        return <p className="empty-message">No recipes yet. Add one below! 👇</p>;
    }

    return (
        <div className="recipe-list">
            {recipes.map(function(recipe) {
                return (
                    <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onDelete={onDeleteRecipe} />
                );
            })}
        </div>
    );
}

export default RecipeList;