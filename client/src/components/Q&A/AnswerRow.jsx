import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Report from './Report';

export default function AnswerRow({ questionId }) {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);
  const [expanded, setExpanded] = useState(false);

  function toggleExpandAnswers() {
    setExpanded((prev) => !prev);
    setCount((prev) => {
      if (prev === 2) {
        return answers.length;
      }
      return 2;
    });
  }

  const renderedAnswers = answers.slice(0, count);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(`/qa/questions/${questionId}/answers`)
      .then((answer) => {
        if (isMounted) setAnswers(answer.data.results);
      });
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="answers-row">
      {renderedAnswers.map((answer) => (
        <div
          className="answer"
          key={answer.answer_id}
        ><b>A: </b>{answer.body}
          <br />
          {answer.answerer_name === 'Seller'
            ? <div className="by-line">by <b>{answer.answerer_name}</b>, {answer.date.slice(0, 10)}  |  <Report helpfulness={answer.helpfulness} /></div>
            : <div className="by-line">by {answer.answerer_name}, {answer.date.slice(0, 10)}  |  <Report helpfulness={answer.helpfulness} /></div>}
        </div>
      ))}
      {answers.length > 2
        ? <span className="load-answers" onClick={toggleExpandAnswers}><b>{!expanded ? 'Load More Answers' : 'Collapse Answers'}</b></span>
        : <></>}
      <br />
    </div>
  );
}
