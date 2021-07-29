/* eslint-disable import/extensions */
import React from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionRow from './QuestionRow.jsx';
import AddQuestion from './AddQuestion.jsx';

export default function QA() {
  return (
    <div style={{ border: '2px solid slateblue' }}>
      Greetings from QA
      <h2>Questions & Answers</h2>
      <SearchBar />
      <QuestionRow />
      <AddQuestion />
    </div>
  );
}
