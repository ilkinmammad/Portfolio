import React from 'react';
import ProductList from './components/cards/Cards'; 
import Navbar from './components/nabar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ProductList /> 
    </div>
  );
};

export default App;
