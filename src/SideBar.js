import React from 'react';
import './SideBar.css';

const SideBar = ({ sizes }) => {
  return (
      <aside className="SideBar">
      <h4>Select Size</h4>
          {sizes.map((size, i) => (
              <button className="btn" key={i}>
                  {size}
              </button>
          ))}
      </aside>
  )
}

export default SideBar;