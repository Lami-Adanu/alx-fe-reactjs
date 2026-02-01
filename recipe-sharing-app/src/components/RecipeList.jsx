import { Link } from 'react-router-dom';
import useRecipeStore  from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>View</Link>
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;