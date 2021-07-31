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
      className="search-bar"
      style={{ border: '2px solid slateblue' }}
    >
      Hello from Search Bar
      <form>
        <input
          className="search-input"
          placeholder="Have a question? Search for answers…"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}
