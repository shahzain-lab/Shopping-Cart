import React from 'react';
import './App.css';
import {CombineComponents , ProductItem} from './components/index';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<CombineComponents />}/>
         <Route path="/bascket" element={<ProductItem />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
