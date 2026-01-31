import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Recipe App</h1>
          
          {/* Navigation */}
          <div>
            <Link to="/">All Recipes</Link> | 
            <Link to="/add">Add Recipe</Link> | 
            <Link to="/favorites">Favorites</Link> | 
            <Link to="/recommendations">Recommendations</Link>
          </div>
          
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App