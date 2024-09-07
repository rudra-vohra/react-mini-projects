import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import './styles/warning.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  function handleClick(item) {
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }
    setCart([...cart, item]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={[
            <Navbar size={cart.length} />,
            <Shop handleClick={handleClick} />,
            warning && (
              <div className="warning">Item is already added to cart</div>
            ),
          ]}
        ></Route>
        <Route
          path="/cart"
          element={<Cart size={cart.length} cart={cart} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
