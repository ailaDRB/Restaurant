import React, { useState } from 'react';
import MenuCard from './MenuCard';

const categories = [
  { label: 'Breakfast', value: 'breakfast' },
  { label: 'Evening', value: 'evening' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Dinner', value: 'dinner' },
  { label: 'All', value: 'all' },
];

const Navbar = () => {
  const [currentCategory, setCurrentCategory] = useState('all');

  const handleClick = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="navbar">
      <nav className="btn-group">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo"/>
        </div>
        {categories.map((category) => (
          <span
            className="btn-group__item"
            onClick={() => handleClick(category.value)}
            key={category.value}
          >
            {category.label}
          </span>
        ))}
        <h1 className="btn-group__item">Discover good taste with us</h1>
      </nav>
      <MenuCard currentCategory={currentCategory} handleClick={handleClick} />
    </div>
  );
};

export default Navbar;

