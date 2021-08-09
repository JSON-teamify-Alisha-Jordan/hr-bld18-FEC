import React, { useState } from 'react';
import axios from 'axios';

export default function ReviewFeedback({ helpfulness, id }) {
  const [vote, setVote] = useState(0);
  const [reported, setReported] = useState(!!localStorage.getItem(`report-${id}`));

  function voteHelpful() {
    if (!localStorage.getItem(`helpful-${id}`)) {
      localStorage.setItem(`helpful-${id}`, 'helpful');
      axios.put(`/reviews/${id}/helpful`)
        .then(() => {
          setVote(1);
        });
    }
  }

  function report() {
    if (!localStorage.getItem(`report-${id}`)) {
      localStorage.setItem(`report-${id}`, 'reported');
      axios.put(`/reviews/${id}/report`)
        .then(() => {
          setReported(true);
        });
    }
  }

  return (
    <div>
      Helpful?
      <button onClick={voteHelpful} className="rr-text-button" type="button">Yes ({helpfulness + vote}) {localStorage.getItem(id) || vote ? 'Thanks for voting!' : null}</button>
      |
      <button onClick={report} className="rr-text-button" type="button">{reported ? 'Thanks for reporting' : 'Report'}</button>
    </div>
  );
}
