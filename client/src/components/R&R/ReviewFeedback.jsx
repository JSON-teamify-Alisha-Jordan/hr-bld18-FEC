import React, { useState } from 'react';
import axios from 'axios';

export default function ReviewFeedback({ helpfulness, id, setReviews }) {
  const [vote, setVote] = useState(0);

  function voteHelpful() {
    if (!localStorage.getItem(id)) {
      localStorage.setItem(id, 'helpful');
      axios.put(`/reviews/${id}/helpful`)
        .then(() => {
          setVote(1);
        });
    }
  }

  return (
    <div>
      Helpful?
      <button onClick={voteHelpful} className="rr-text-button" type="button">Yes ({helpfulness + vote}) {localStorage.getItem(id) || vote ? 'Thanks for voting!' : null}</button>
      |
      <button className="rr-text-button" type="button">Report</button>
    </div>
  );
}
