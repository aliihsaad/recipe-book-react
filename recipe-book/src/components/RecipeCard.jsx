import { Link } from "react-router-dom";

function RecipeCard({recipe, onDelete}) {
    return (
        <div className="recipe-card">
        <Link to={`/recipes/${recipe.id}`} className="recipe-card-link">
            <img src={recipe.image} alt={recipe.title} className="recipe-card-img" />
            <div className="recipe-card-body">
                <Link to={`/recipes/${recipe.id}`}>
                    <h3 className="recipe-card-title">{recipe.title}</h3>
                </Link>
                <p className="recipe-card-meta">
                    {recipe.category} . {recipe.difficulty} . ⏱ {recipe.prepTime + recipe.cookTime} min
                </p>
                {recipe.vegetarian && (
                <span className="vegetarian-badge">🌿vegetarian</span>
                )}
                </div>
                </Link>
                <button className="btn-delete" onClick={() => onDelete(recipe.id)}>🗑 Delete</button> 
            </div>
    );
}

export default RecipeCard;