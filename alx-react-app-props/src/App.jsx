import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from './ProfilePage';
import { UserContext } from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    //Wrap the component tree and provide the value
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}
export default App;
