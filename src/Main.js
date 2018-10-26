import React from 'react';
import './Main.css';

const Main = ({ images }) => {
  return (
    <main className="Main">
      {images.map((image, i) => (
        <div className="shirtImage" key={i}>
          <img src={require(`./Images/${image}`)} key={i} alt={image} />
          <div className="addToCart">ADD TO CART</div>
        </div>
      ))}
    </main>
  );
};

export default Main;
