import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function AddAnswerModal() {
  const { showAddAnswerModal, setShowAddAnswerModal } = useContext(ProductContext);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: showAddAnswerModal ? 'translate(0, 40rem)' : 'translateY(-100vh)',
        opacity: showAddAnswerModal ? '1' : '0',
        zIndex: showAddAnswerModal ? '1' : '-1',
        position: 'absolute',
        left: '25%',
        top: '25%',
      }}
    >
      <div className="modal-header">
        <b><h2>Add Your Answer</h2></b>
        <em><h3>[Product Name Here, Question Name]</h3></em>
        <span
          onClick={() => setShowAddAnswerModal(false)}
          className="close-modal-btn"
        ><b>X</b>
        </span>
      </div>
      <div className="modal-content">
        <form
          className="modal-body"
          onSubmit={handleSubmit}
        >
          <div className="modal-top-info">
            <h3>Nickname</h3>
            <h3>Email</h3>
          </div>
          <div className="modal-nickname-email">
            <input
              type="text"
              placeholder="Example: jackson11!"
            />
            <input
              type="text"
              placeholder="aperson@gmail.com"
            />
          </div>
          <div className="modal-info">
            <span>For privacy reasons, do not use your full name or email address</span>
            <span>For authentication reasons, you will not be emailed</span>
          </div>
          <textarea
            className="modal-input"
            placeholder="What knowledge would you like to drop?"
          />
          <div className="modal-footer">
            <button
              className="btn-add"
              type="submit"
            >
              <b>Add Answer</b>
            </button>
            <button
              className="btn-close"
              onClick={() => setShowAddAnswerModal(false)}
              type="button"
            >
              <b>Close</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
