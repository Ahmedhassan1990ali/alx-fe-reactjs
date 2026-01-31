import { Link, useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  if (!recipe) {
    return (
      <div>
        <div>Recipe not found</div>
        <Link to="/">Back to recipes</Link>
      </div>
    );
  }

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={toggleFavorite}>
        {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
      </button>
      
      <EditRecipeForm recipeId={recipeId} />
      <DeleteRecipeButton recipeId={recipeId} />
      
      <br />
      <Link to="/">Back to all recipes</Link>
    </div>
  );
};

export default RecipeDetails;