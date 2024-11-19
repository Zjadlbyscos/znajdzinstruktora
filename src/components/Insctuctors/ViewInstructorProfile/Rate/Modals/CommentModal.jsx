import React from "react";

export const CommentModal = ({ handleClose, comment }) => {
  return (
    <div>
      <div>
        <button onClick={handleClose}>Zamknij</button>
        <p>{comment}</p>
      </div>
    </div>
  );
};
