import React from 'react';
import Cart from './Cart';

const RenderCart = ({ isActive }) => {
  console.log('in Cart ' + isActive);
  const isCartReady = () => {
    if (isActive) {
      return (
        <Cart />
      );
    }
    else if(!isActive) {
      return 
    }
  };

  return <aside>{isCartReady()}</aside>
};

export default RenderCart;
