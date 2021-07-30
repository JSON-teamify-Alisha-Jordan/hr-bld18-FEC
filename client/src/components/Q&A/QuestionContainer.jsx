/* eslint-disable import/extensions */
import React from 'react';
import QuestionRow from './QuestionRow.jsx';

export default function QuestionContainer() {
  return (
    <div style={{ border: '2px solid slateblue' }}>
      Hello from Container
      <QuestionRow />
    </div>
  );
}
