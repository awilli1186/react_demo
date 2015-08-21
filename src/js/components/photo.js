import React from 'react/addons';

import UserAvatar from './user-avatar';
import TimeStamp from './timestamp';
import Likes from './likes';
import Comments from './comments';
import ToggleLike from './toggle-like';
import AddComment from './add-comment';
import PhotoControls from './photo-controls';

class Photo extends React.Component {
  render() {
    return (
      <div className="photo">
        <header>
          <UserAvatar user={this.props.user}/>
          <TimeStamp created={this.props.created}/>
        </header>
        <img src={this.props.url}/>
        <Likes likes={this.props.likes}/>
        <Comments comments={this.props.comments}/>
        <footer>
          <ToggleLike/>
          <AddComment photo={this.props}/>
          <PhotoControls/>
        </footer>
      </div>
    )
  }
}

export default Photo;
