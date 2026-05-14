import { useState } from "react";
import RecipeList from "../components/RecipeList";
import RecipesArr from "../data/recipes.json";

function DashboardPage() {
  const [recipes, setRecipes] = useState(RecipesArr);

  const onDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <div className="dashboard">
      <h1> My Recipe Book</h1>
      <p className="subtitle">{recipes.length} recipes saved</p>
      <RecipeList recipes={recipes} onDeleteRecipe={onDeleteRecipe} />
    </div>
  )
}
export default DashboardPage;