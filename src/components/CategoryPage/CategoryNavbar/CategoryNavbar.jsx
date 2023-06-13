import React, { useState } from 'react';
import './CategoryNavbar.css';

const Navbar = ({ handleFilterByRate, handleFilterByType, handleSortByPrice }) => {
  const [selectedRate, setSelectedRate] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSort, setSelectedSort] = useState('low-to-high');

  const handleRateChange = (e) => {
    const rate = e.target.value;
    setSelectedRate(rate);
    handleFilterByRate(rate);
  };
  const handleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    handleFilterByType(type);
  };
  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    setSelectedSort(sortOption);
    handleSortByPrice(sortOption);
  };

  return (
    <nav className='Navbar'>
      <label  htmlFor="rate-filter">Filter by Rate:</label>
      <select className='rate-n' id="rate-filter" value={selectedRate} onChange={handleRateChange}>
        <option value="all">All</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>

      <label className='type-n' htmlFor="type-filter">Filter by Type:</label>
      <select id="type-filter" value={selectedType} onChange={handleTypeChange}>
        <option value="all">All</option>
        <option value="type1">dress</option>
        <option value="type2">blouse</option>
        <option value="type3">hijab</option>
      </select>

      <label className='sort-n' htmlFor="sort-by">Sort by Price:</label>
      <select   id="sort-by" value={selectedSort} onChange={handleSortChange}>
        <option value="low-to-high"> Low to High</option>
        <option value="high-to-low"> High to Low</option>
      </select>
    </nav>
  );
};

export default Navbar;
