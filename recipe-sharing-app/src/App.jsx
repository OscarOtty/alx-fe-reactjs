import { useState } from 'react'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
// You might need to clean up the default Vite/React imports if they still exist

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        Recipe Sharing Application
      </h1>
      
      {/* Component for adding new recipes */}
      <AddRecipeForm />

      {/* Component for displaying the list of recipes */}
      <RecipeList />
    </div>
  );
}

export default App;
