import React from 'react';
import './PostContainer.css';
import Post from './Post';

function PostContainer (props) {
    console.log(props);
    return(
        <div className="post-container">
            {props.posts.map(p => {
                return <Post key={p.imageUrl} comments={p.comments} post={p} thumbnailUrl={p.thumbnailUrl}/>
            })}
        </div>
    );
}

export default PostContainer;