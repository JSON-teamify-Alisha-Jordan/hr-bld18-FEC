import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Report from './Report';

export default function AnswerRow({ questionId, incrementCount }) {
  const [answers, setAnswers] = useState([]);

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
      style={{ border: '2px solid slateblue' }}
    >
      {answers.map((answer) => (
        <div key={answer.answer_id}><b>A:</b>{answer.body}
          <br />by {answer.answerer_name}, {answer.date.slice(0, 10)} | <Report />
        </div>
      ))}
      {answers.length > 2
        ? <button className="load-answers" type="button" onClick={incrementCount}>Load More Answers</button>
        : <></>} <br />
    </div>
  );
}
