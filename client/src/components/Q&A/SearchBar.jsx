/* eslint-disable import/extensions */
import React from 'react';

export default function SearchBar() {
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
        />
      </form>
    </div>
  );
}
