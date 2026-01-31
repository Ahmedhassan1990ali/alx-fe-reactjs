import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  
  useEffect(() => {
    if (typeof filterRecipes === 'function') {
      filterRecipes();
    }
  }, [searchTerm, recipes, filterRecipes]);

  return (
    <div>
      <h2>Recipes</h2>
      
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
      
      <Link to="/add">Add New Recipe</Link>
    </div>
  );
};

export default RecipeList;