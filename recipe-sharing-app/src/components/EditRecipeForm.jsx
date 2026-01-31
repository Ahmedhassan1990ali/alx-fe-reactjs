import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function EditRecipeForm({ recipeId }) {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipeId, { id: recipeId, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe:</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;