import React from 'react';
import Card from './Card';
import list from '../list';

const Shop = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => {
        return <Card item={item} key={item.id} handleClick={handleClick} />;
      })}
    </section>
  );
};

export default Shop;
