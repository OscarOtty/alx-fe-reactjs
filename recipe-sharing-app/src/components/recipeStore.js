import create from 'zustand'
import { useRecipeStore } from './recipeStore';
// This store manages the global array of recipes and the CRUD actions.
const useRecipeStore = create((set) => ({
  // Initial state with dummy data
  recipes: [
    { id: 1609459200000, title: 'Spicy Chicken Curry', description: 'A flavorful and easy-to-make curry that is ready in 30 minutes. Instructions: 1. Sauté onions and spices. 2. Add chicken and cook. 3. Pour in coconut milk and simmer.', ingredients: 'Chicken, Curry Paste, Coconut Milk, Onion, Garlic' },
    { id: 1609459200001, title: 'Classic Tomato Soup', description: 'Simple, creamy, and perfect for a cold day. Uses fresh tomatoes. Instructions: 1. Simmer tomatoes and stock. 2. Blend until smooth. 3. Stir in cream and season.', ingredients: 'Fresh Tomatoes, Cream, Basil, Vegetable Stock' },
  ],

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [newRecipe, ...state.recipes], // Add new recipe to the top
    })),

  // Action to delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
}));
