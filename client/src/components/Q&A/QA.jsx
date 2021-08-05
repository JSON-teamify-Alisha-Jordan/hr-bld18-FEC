import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuestionContainer from './QuestionContainer';
import AddQModal from './AddQModal';
import AddAnswerModal from './AddAnswerModal';

export default function QA() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div
      className="main-container"
    >
      <h2>Questions & Answers</h2>
      <AddQModal />
      <SearchBar setSearchTerm={setSearchTerm} />
      <AddAnswerModal />
      <QuestionContainer searchTerm={searchTerm} />
    </div>
  );
}
