import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useRecipeStore from "./components/recipeStore";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";

function Home() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic route for recipe details */}
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
      
    </Router>
   
  );
}

export default App;
