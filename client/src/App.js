import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Component/Main';
import FirstComp from './Component/FirstComp';
import ProductList from './Component/ProductDetail';

function App() {
  return (
    <Routes>
        <Route path="/" element={<FirstComp/>} />
        <Route path="/home" element={<Main/>} />
        <Route path="/product" element={<ProductList/>} />
    </Routes>
  );
}

export default App;