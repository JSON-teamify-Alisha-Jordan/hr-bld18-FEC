/* eslint-disable import/extensions */
import React from 'react';
import QuestionRow from './QuestionRow';

export default function QuestionContainer({ searchTerm }) {
  return (
    <div
      className="questions-container"
      style={{ border: '2px solid slateblue' }}
    >
      Hello from Container
      <QuestionRow searchTerm={searchTerm} />
    </div>
  );
}
