import React, { Component } from 'react';
import './App.css';
import { sizes } from './data';
import SideBar from './SideBar';
import Main from './Main';
import { images } from './data';
import RenderCart from './RenderCart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCartClicked: false
    };

    this.cartClicked = this.cartClicked.bind(this);
  }

  cartClicked() {
    this.setState({
      isCartClicked: !this.state.isCartClicked
    });
  }

  render() {
    console.log(this.state.isCartClicked);
    return (
      <div className="App">
        <header>
          <span>One Stop Cloth</span>
          <i className="fa fa-shopping-cart" onClick={this.cartClicked} />
        </header>

        <div
          className={`App_Components ${
            this.state.isCartClicked ? 'CartActive' : ''
          }`}
        >
          <SideBar sizes={sizes} className="SideBar" />
          <Main images={images} className="Main" />
          <RenderCart isActive={this.state.isCartClicked} className="RenderCart" />
        </div>
      </div>
    );
  }
}

export default App;
