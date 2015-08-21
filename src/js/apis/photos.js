import $ from 'jquery';
import {_} from 'lodash';

import PhotosStore from '../stores/photos';
import PhotoServerActions from '../actions/photos-server'

export default {
  getAllPhotos() {
    let url = 'https://tiny-starburst.herokuapp.com/collections/posts';

    $.ajax(url).done((response) => {
      PhotoServerActions.loadedAllPhotos(response);
    });
  },

  addComment(photoId, user, content){
    let url = `https://tiny-starburst.herokuapp.com/collections/posts/${photoId}`;
    let photo = PhotosStore.getPhotoById(photoId);

    let comment = {
      user: user,
      content: content
    };

    photo.comments.push(comment);

    $.ajax(url, {
      method: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(photo)
    }).always(() => {
      PhotoServerActions.addedComment(photoId, comment);
    });
  }
}
