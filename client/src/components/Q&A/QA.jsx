import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuestionContainer from './QuestionContainer';
import AddQuestion from './AddQuestion';
import AddQModal from './AddQModal';

export default function QA({ show, setShow }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div
      className="main-container"
      style={{ border: '2px solid slateblue' }}
    >
      <h2>Questions & Answers</h2>
      <AddQModal show={show} setShow={setShow} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <QuestionContainer searchTerm={searchTerm} />
      <AddQuestion setShow={setShow} />
    </div>
  );
}
