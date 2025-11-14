// AddRecipeForm component
  import { useState } from 'react';
  import { useRecipeStore } from './recipeStore';

 const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim() || !ingredients.trim()) {
      // Use a custom message box instead of alert()
      // Note: This relies on the browser's native window.confirm, which is allowed as a fallback
      // but ideally this would be replaced with a custom modal UI component.
      window.confirm("Please fill in all fields (Title, Description, and Ingredients).");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients.trim(),
    };

    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    setIngredients('');
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl mb-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Share a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title (e.g., Simple Pad Thai)"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Detailed Description and instructions..."
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 resize-none"
          required
        />
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Key Ingredients (comma-separated, e.g., Sugar, Rice, Milk)"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
          required
        />
        <button
          type="submit"
          className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-md transition duration-200 transform hover:scale-[1.01]"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};
