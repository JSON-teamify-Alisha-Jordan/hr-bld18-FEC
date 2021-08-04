import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuestionContainer from './QuestionContainer';
import AddQModal from './AddQModal';

export default function QA({ show, setShow }) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div
      className="main-container"
    >
      <h2>Questions & Answers</h2>
      <AddQModal show={show} setShow={setShow} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <QuestionContainer searchTerm={searchTerm} setShow={setShow} />
    </div>
  );
}
