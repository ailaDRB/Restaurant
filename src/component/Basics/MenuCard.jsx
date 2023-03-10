import React from 'react';
import MenuData from './menuApi';

const MenuCard = ({ currentCategory }) => {
  const filteredData = MenuData.filter((item) => {
    if (currentCategory === 'all') {
      return true;
    } else {
      return item.category === currentCategory;
    }
  });
 // == will only match the value 
 // === match for identical twins
  return (
    <section className="main-card--cointainer"> 
      {filteredData.map((menu) => (
        <div key={menu.id} className="card-container">
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle">{menu.id}</span>
              <span className="card-author subtle">{menu.category}</span>
              <h2 className="card-title">{menu.name}</h2>
              <span className="card-description subtle">{menu.description}</span>
              <div className="card-read">{menu.price}</div>
            </div>
            <img src={menu.image} alt={menu.name} className="card-media" />
            <span className="card-tag  subtle">Order Now</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MenuCard;

