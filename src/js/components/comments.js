import React from 'react/addons';
import Comment from './comment';

class Comments extends React.Component {
  render() {
    let comments = this.props.comments;

    return (
      <div className="comments">
        {
          comments.map((comment, i) => {
            return <Comment {...comment} key={i}/>
          })
        }
      </div>
    )
  }
}

export default Comments;
