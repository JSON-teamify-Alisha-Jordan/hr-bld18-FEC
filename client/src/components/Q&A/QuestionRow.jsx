/* eslint-disable import/extensions */
import React from 'react';
import AnswerRow from './AnswerRow.jsx';

export default function QuestionRow() {
  return (
    <div style={{ border: '2px solid slateblue' }}>
      Hello from Question Row
      <AnswerRow />
    </div>
  );
}
