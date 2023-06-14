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

      <label className="sortA-n" htmlFor="sort-alphabet">Sort by Alphabet:</label>
      <select id="sort-alphabet" value={selectedSort} onChange={handleSortChange}>
         <option value="a-to-z">A to Z</option>
         <option value="z-to-a">Z to A</option>
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
