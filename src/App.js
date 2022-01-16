import './App.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './Components/Hero/index.js'
function App() {
  return (
    <Router>
      <GlobalStyle />
      
      <Hero />
    </Router>
  );
}

export default App;
