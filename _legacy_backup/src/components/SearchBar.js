import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search resources..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      console.log('SearchBar calling onSearch with:', searchTerm); // Debug log
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [searchTerm, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="search-input"
        />
        {searchTerm && (
          <button 
            onClick={handleClear}
            className="search-clear"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
