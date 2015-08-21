import React from 'react/addons';

class Likes extends React.Component {
  render() {
    return (
      <div className="likes">
        {this.props.likes} likes
      </div>
    )
  }
}

export default Likes;
