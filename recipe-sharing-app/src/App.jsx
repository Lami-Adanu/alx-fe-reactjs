import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import useRecipeStore from './components/recipeStore';

function App() {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <Router>
      <div>
        <h1>Recipe App</h1>
        <SearchBar />

        {/* Favorites and Recommendations */}
        <FavoritesList />
        <button onClick={generateRecommendations}>Generate Recommendations</button>
        <RecommendationsList />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;