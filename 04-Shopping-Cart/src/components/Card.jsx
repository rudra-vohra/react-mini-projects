import React from 'react';
import '../styles/card.css';

const Card = ({ item, handleClick }) => {
  const { title, author, img, price } = item;
  return (
    <div className="cards">
      <div className="img-box">
        <img src={img} alt="image-book" />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{author}</p>
        <h4>Price - {price} Rs</h4>
        <button className="btn" onClick={() => handleClick(item)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
