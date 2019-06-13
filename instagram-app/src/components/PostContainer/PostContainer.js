import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'

function PostContainer (props) {
    return(
        <div className="post-container">
            <CommentSection comments={props.data.comments}/>
        </div>
    );
}

export default PostContainer;