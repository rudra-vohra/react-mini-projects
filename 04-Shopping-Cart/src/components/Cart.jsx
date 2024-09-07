import React from 'react';
import Navbar from './Navbar';

const Cart = ({ size, cart }) => {
  return (
    <>
      <Navbar size={size} />
      <div>
        {cart?.map((item) => (
          <div className="cart-item" key={item.key}>
            <div className="cart-img">
              <img src={item.img} alt="image1" />
            </div>
            <h3>{item.title}</h3>
            <div>
              <button>+</button>
              <button>-</button>
            </div>
            <div>
              <span>Price -{item.price}Rs</span>
              <button>Remove Item</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
