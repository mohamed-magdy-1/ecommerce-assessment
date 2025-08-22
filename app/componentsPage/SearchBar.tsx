'use client';

import React, { memo } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

const SearchBar = memo(function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search products..." 
}: SearchBarProps) {
  return (
    <div className='mb-4'>
      <input
        type='text'
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200'
      />
    </div>
  );
});

export default SearchBar;
