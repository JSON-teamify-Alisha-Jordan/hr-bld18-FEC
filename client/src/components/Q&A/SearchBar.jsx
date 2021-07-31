/* eslint-disable import/extensions */
import React from 'react';

export default function SearchBar({ setSearchTerm }) {
  function handleSearch(event) {
    const search = event.nativeEvent.target.value;
    if (search.length >= 3) {
      setSearchTerm(search);
    }
  }

  return (
    <div
      className="searchBar"
      style={{ border: '2px solid slateblue' }}
    >
      Hello from Search Bar
      <form>
        <input
          className="searchInput"
          placeholder="Have a question? Search for answers…"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}
