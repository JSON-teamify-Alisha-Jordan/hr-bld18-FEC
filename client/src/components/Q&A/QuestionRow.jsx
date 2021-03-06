import React, { useContext } from 'react';
import ProductContext from '../../context';
import AnswerRow from './AnswerRow';
import Helpful from './Helpful';

export default function QuestionRow({ searchTerm, count }) {
  const { questions } = useContext(ProductContext);

  const renderedQuestions = questions.slice(0, count).filter(
    (question) => question.question_body.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1,
  );

  return (
    <div className="question-row">
      {renderedQuestions.map((question) => (
        <div
          className="question"
          key={question.question_id}
        >
          <div className="helpful-header">
            <div className="question-text">Q: {question.question_body}</div>
            <Helpful helpfulness={question.question_helpfulness} />
          </div>
          <AnswerRow questionId={question.question_id} />
          <br />
        </div>
      ))}
    </div>
  );
}
