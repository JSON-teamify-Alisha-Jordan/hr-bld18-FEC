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
          placeholder="Have a question? Search for answers…"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}
