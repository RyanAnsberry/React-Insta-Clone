import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

function Comment (props) {
    return (
        <div className="comment">
            <div className="comment-header">
                <h5 className="comment-username">{props.comment.username}</h5>
            </div>
            <div className="comment-text-container">
                <p className="comment-text">{props.comment.text}</p>
            </div>
        </div>
    );
};
Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;