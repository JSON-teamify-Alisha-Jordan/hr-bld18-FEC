import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Report from './Report';

export default function AnswerRow({ questionId }) {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);

  function incrementAnswerCount() {
    setCount((previousCount) => previousCount + 2);
  }

  const renderedAnswers = answers.slice(0, count);

  function fetchAnswers() {
    axios
      .get(`/qa/questions/${questionId}/answers`)
      .then((answer) => {
        setAnswers(answer.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchAnswers();
  }, []);

  return (
    <div
      className="answers-row"
    >
      {renderedAnswers.map((answer) => (
        <div
          className="answer"
          key={answer.answer_id}
        ><b>A: </b>{answer.body}
          <br />
          <div className="by-line">by {answer.answerer_name}, {answer.date.slice(0, 10)}  |  <Report /></div>
        </div>
      ))}
      {answers.length > 2
        ? <span className="load-answers" onClick={incrementAnswerCount}><b className="load-text">Load More Answers</b></span>
        : <></>} <br />
    </div>
  );
}
