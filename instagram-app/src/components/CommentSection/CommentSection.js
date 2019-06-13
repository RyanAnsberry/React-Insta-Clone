import React from 'react';
import './CommentSection.css';

function CommentSection (props) {
    return(
        <div className="comment-section">
            {props.comments.map( comment => {
                return (
                    <div className="comment" key={comment.id}>
                        <h5 className="comment-username">{comment.username}</h5>
                        <p className="comment=text">{comment.text}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default CommentSection;