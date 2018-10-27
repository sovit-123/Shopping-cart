import React from 'react';
import Cart from './Cart';

let totalItems = 0;

const RenderCart = ({ isActive, itemCount }) => {
  console.log('In RenderCart.js ' + totalItems);
  if (itemCount !== undefined) {
    totalItems = itemCount;
  }
  const isCartReady = () => {
    if (isActive) {
      return <Cart itemCount={totalItems} />;
    } else if (!isActive) {
      return;
    }
  };
  return <aside>{isCartReady()}</aside>;
};

export default RenderCart;
