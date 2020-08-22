  
import React from 'react';
import Header from './Components/Header/Header';
import Login from './Components/Auth/Login';
import './App.css';
import './Common.css';

function App() {
  return (
    <div className="app-container">
        <Header/>
        <Login />
    </div>
  )
}

export default App;