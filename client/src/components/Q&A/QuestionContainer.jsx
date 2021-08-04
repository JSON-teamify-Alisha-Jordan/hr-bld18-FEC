import React from 'react';
import QuestionRow from './QuestionRow';

export default function QuestionContainer({ searchTerm }) {
  return (
    <div
      className="questions-container"
    >
      <QuestionRow searchTerm={searchTerm} />
    </div>
  );
}
