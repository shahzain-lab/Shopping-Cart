import React from 'react';
import './App.css';
import {NavBar , Product, ProductItem} from './components/index';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<NavBar />}></Route>
         <Route path="/" element={<Product />}></Route>
         <Route path="/bascket" element={<ProductItem />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
