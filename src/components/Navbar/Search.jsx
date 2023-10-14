import React, { useState } from 'react';

export default function Search({ searchValue, animes, setFilteredResults }) {
    const [searchInput, setSearchInput] = useState('');
    const searchItems = () => {
        setSearchInput(searchValue)
        const filteredData = animes.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            
        })
        setFilteredResults(filteredData)
    }
    return (
        <div className='search-container'>
            <input
                className='search'
                type='text'
                placeholder='Search anime...'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className='btn-search' onClick={searchItems}  >Search</button>
        </div>
    );
}
