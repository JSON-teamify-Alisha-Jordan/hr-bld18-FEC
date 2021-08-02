/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      A:
      {answers.map((answer) => answer.body)}
      <br />
      {answers.length > 2 ? <button className="load-answers" type="button" onClick={incrementCount}>Load More Answers</button> : <></>}
    </div>
  );
}
