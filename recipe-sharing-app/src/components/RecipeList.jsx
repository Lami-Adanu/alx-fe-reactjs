import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 && <p>No recipes found.</p>}

      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            {/* Wrap the title with Link to navigate to the recipe detail page */}
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
