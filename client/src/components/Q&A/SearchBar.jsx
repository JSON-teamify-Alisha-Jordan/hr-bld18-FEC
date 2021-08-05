import React from 'react';

export default function SearchBar({ setSearchTerm }) {
  function handleSearch(event) {
    const search = event.target.value;
    if (search.length >= 3) {
      setSearchTerm(search);
    } else {
      setSearchTerm('');
    }
  }

  return (
    <div
      className="search-bar"
    >
      <form>
        <input
          className="search-input"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}
