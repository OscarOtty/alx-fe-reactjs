import UserProfile from './components/UserProfile';
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter';

function App() {
  return (
    <>
        <Header />
        
        {/*
          --- Pass data to UserProfile as attributes/props ---
          Note that age is passed as a string ("25") for simplicity,
          but could also be passed as a number ({25}).
        */}
        <UserProfile 
          name="Alice Johnson" 
          age="25" 
          bio="Loves hiking and photography." 
        />
        
        {/* You can use the component again with different data! */}
        <UserProfile 
          name="Bob Smith" 
          age="30" 
          bio="Bob is a software engineer who enjoys chess and reading sci-fi novels." 
        />
        
        <MainContent />
        <Counter />
      
        <Footer />
    </>
  );
}

export default App;
