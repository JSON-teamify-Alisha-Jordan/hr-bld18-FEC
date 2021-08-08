import React from 'react';
import axios from 'axios';

export default function ReviewFeedback({ helpfulness, id }) {
  function voteHelpful() {
    localStorage.setItem(id, 'helpful');
    axios.put(`/reviews/${id}/helpful`);
  }

  return (
    <div>
      Helpful?
      <button onClick={voteHelpful} className="rr-text-button" type="button">Yes ({helpfulness}) {localStorage.getItem(id) ? 'Thanks for voting!' : null}</button>
      |
      <button className="rr-text-button" type="button">Report</button>
    </div>
  );
}
