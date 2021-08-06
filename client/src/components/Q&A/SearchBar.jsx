import React from 'react';

export default function SearchBar({ setSearchTerm }) {
  function handleSearch(event) {
    const search = event.target.value;
    if (search.length >= 3) {
      setSearchTerm(search);
    }
    setSearchTerm('');
  }

  return (
    <div className="search-bar">
      <form>
        <b><input
          className="search-input"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…"
          onChange={handleSearch}
        />
        </b>
      </form>
    </div>
  );
}
