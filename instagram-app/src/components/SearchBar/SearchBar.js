import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div>
        <input className="search-bar-input" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;