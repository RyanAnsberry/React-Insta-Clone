import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

  commentChange = e => {
    this.setState({ comment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: 'User' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  }
  
  render() {
    return (
      <div>
        {this.state.comments.map( (comment, index) => <Comment key={index} comment={comment} />)}
        <CommentInput 
            submitComment={this.addNewComment}
            comment={this.state.comment}
            commentChange={this.commentChange}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ 
        text: PropTypes.string, 
        username: PropTypes.string 
    })
  )
};

export default CommentSection;