import React from 'react';
import './App.css';
import {NavBar , Product} from './components/index';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Product />
    </Router>
  );
}

export default App;
