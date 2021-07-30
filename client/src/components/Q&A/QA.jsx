/* eslint-disable import/extensions */
import React from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionContainer from './QuestionContainer.jsx';
import AddQuestion from './AddQuestion.jsx';
import AddQModal from './AddQModal.jsx';

export default function QA({ show, setShow }) {
  return (
    <div
      className="mainContainer"
      style={{ border: '2px solid slateblue' }}
    >
      <h2>Questions & Answers</h2>
      <AddQModal show={show} setShow={setShow} />
      <SearchBar />
      <QuestionContainer />
      <AddQuestion setShow={setShow} />
    </div>
  );
}
