/* eslint-disable import/extensions */
import React from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionContainer from './QuestionContainer.jsx';
import AddQuestion from './AddQuestion.jsx';

export default function QA() {
  return (
    <div style={{ border: '2px solid slateblue' }}>
      <h2>Questions & Answers</h2>
      <SearchBar />
      <QuestionContainer />
      <AddQuestion />
    </div>
  );
}
