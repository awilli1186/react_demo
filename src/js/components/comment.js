import React from 'react/addons';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p>
          <a href="#">{this.props.user}</a>
          {this.props.content}
        </p>
      </div>
    )
  }
}

export default Comment;
