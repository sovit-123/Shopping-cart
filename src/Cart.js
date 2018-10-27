import React from 'react';
import './Cart.css';

let totalItems = 0;

const Cart = ({ itemCount }) => {
  if (itemCount !== undefined) {
    totalItems = itemCount
  }
  console.log("In Cart.js totalItems " + totalItems);
  return (
    <div className="Cart">
      <h3>Your Bag</h3>
      <i className="fa fa-shopping-bag" />
      <div className="item-count">{totalItems}</div>
    </div>
  );
};

export default Cart;
