import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuestionContainer from './QuestionContainer';
import AddQModal from './AddQModal';
import AddAnswerModal from './AddAnswerModal';

export default function QA() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
<<<<<<< HEAD
    <div
      className="main-container"
    >
      <h2 className="QA-header">QUESTIONS & ANSWERS</h2>
=======
    <div className="main-container">
      <h2>Questions & Answers</h2>
>>>>>>> f2136c51ccf9bc25a37f068b094b3bfbc8d19904
      <AddQModal />
      <AddAnswerModal />
      <SearchBar setSearchTerm={setSearchTerm} />
      <QuestionContainer searchTerm={searchTerm} />
    </div>
  );
}
