import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({}); // ADDED: errors state

  const validate = () => { // ADDED: validate function
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!summary.trim()) newErrors.summary = 'Summary is required';
    
    const ingredientList = ingredients.split('\n').filter(item => item.trim());
    if (ingredientList.length < 2) {
      newErrors.ingredients = 'At least 2 ingredients required';
    }
    
    if (!instructions.trim()) newErrors.instructions = 'Instructions are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate(); // ADDED: call validate
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // ADDED: set errors
      return;
    }
    
    setErrors({}); // ADDED: clear errors on success
    alert('Recipe added!');
    navigate('/');
  };

  return (
    <div className="p-4">
      <button onClick={() => navigate('/')} className="mb-4">← Back</button>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              value={title} 
              onChange={(e) => {
                setTitle(e.target.value);
                setErrors({...errors, title: ''});
              }} 
              placeholder="Title" 
              className={`w-full p-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          
          <div>
            <input 
              value={summary} 
              onChange={(e) => {
                setSummary(e.target.value);
                setErrors({...errors, summary: ''});
              }} 
              placeholder="Summary" 
              className={`w-full p-2 border rounded ${errors.summary ? 'border-red-500' : ''}`}
            />
            {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
          </div>
          
          <div>
            <textarea 
              value={ingredients} 
              onChange={(e) => {
                setIngredients(e.target.value);
                setErrors({...errors, ingredients: ''});
              }} 
              placeholder="Ingredients(steps) (one per line)" 
              className={`w-full p-2 border rounded h-32 ${errors.ingredients ? 'border-red-500' : ''}`}
            />
            {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
          </div>
          
          <div>
            <textarea 
              value={instructions} 
              onChange={(e) => {
                setInstructions(e.target.value);
                setErrors({...errors, instructions: ''});
              }} 
              placeholder="Instructions (one per line)" 
              className={`w-full p-2 border rounded h-32 ${errors.instructions ? 'border-red-500' : ''}`}
            />
            {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
          </div>
          
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;