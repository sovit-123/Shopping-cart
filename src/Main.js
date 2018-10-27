import React from 'react';
import './Main.css';
import Cart from './Cart';
import RenderCart from './RenderCart';

const state = {
  isClicked: false,
  items: 0
};

function addItem() {
  state.isClicked = true;
  state.items = state.items + 1;
}

const Main = ({ images }) => {
  const areItemsAdded = () => {
    console.log("In Main.js inside areItemsAdded() " + state.items + ' ' + state.isClicked)
    if (state.isClicked) {
      return (
              <RenderCart itemCount={state.items} />
        );
    }
  };
  return (
    <main className="Main">
      {images.map((image, i) => (
        <div className="shirtImage" key={i}>
          <img src={require(`./Images/${image}`)} key={i} alt={image} />
          <div className="addToCart" onClick={addItem}>
            ADD TO CART
          </div>
        </div>
      ))}
      <div>{areItemsAdded()}</div>
    </main>
  );
};

export default Main;
