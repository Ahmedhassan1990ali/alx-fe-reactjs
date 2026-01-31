import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const favorites = useRecipeStore(state => state.favorites);
  
  const displayRecipes = searchTerm 
    ? recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {displayRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>
              {recipe.title}
              {favorites.includes(recipe.id) && ' ❤️'}
            </Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
      
      <Link to="/add">Add New Recipe</Link>
    </div>
  );
};

export default RecipeList;