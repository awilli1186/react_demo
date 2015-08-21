import React from 'react/addons';
import $ from 'jquery';
import PhotosViewActions from '../actions/photos-view';

class AddComment extends React.Component {
  onAdd(e) {
    if (e.which === 13) {
      let comment = this.refs.input.getDOMNode().value;
      let user = 'adam';
      let photoId = this.props.photo._id;

      PhotosViewActions.addComment(photoId, user, comment);
    }
  }

  render() {
    return (
      <input ref="input" placeholder="Add Comment..." onKeyPress={this.onAdd.bind(this)}/>
    )
  }
}

export default AddComment;
