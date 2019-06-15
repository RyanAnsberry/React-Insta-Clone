import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input 
        type="text" 
        placeholder="Add comment... " 
        value={props.comment} 
        onChange={props.commentChange}
      />
    </form>
  );
};

export default CommentInput;