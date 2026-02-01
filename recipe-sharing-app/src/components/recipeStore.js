import {create} from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  filterRecipes: (term = '') => {
    const { recipes } = get();
    const search = term.toLowerCase();

    const filtered = recipes.filter(recipe => {
      const matchesTitle = recipe.title.toLowerCase().includes(search);
      const matchesIngredients = recipe.ingredients.some(ing =>
        ing.toLowerCase().includes(search)
      );
      const matchesTime = recipe.prepTime?.toString().includes(search);

      return matchesTitle || matchesIngredients || matchesTime;
    });

    set({ filteredRecipes: filtered });
  },
}));

export default useRecipeStore;
