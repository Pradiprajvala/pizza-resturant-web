import './App.css';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './Components/Hero/index.js'
import Products  from './Components/Products/index.js'
import{ productData } from './Components/Products/data.js'
import Feature from './Components/Feature/index.js';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favourite' data={productData}/>
      <Feature />
    </Router>
  );
}

export default App;
