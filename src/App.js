import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Promotions from './components/Promotions';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Promotions />
      <Contacts />
    </div>
  );
}

export default App;
