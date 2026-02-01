import { useRecipeStore } from "../store/recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 && <p>No recipes found.</p>}

      <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeList
