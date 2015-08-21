import {_} from 'lodash';

import AppDispatcher from '../dispatchers/app-dispatcher';
import {EventEmitter} from 'events';

let data = {
    photos: []
};


function loadAllPhotos(action) {
  data.photos = action.data;
  _PhotosStore.emitChange();
}

function addComment(action) {
  let photoIndex = _PhotosStore.getPhotoIndexById(action.data.photoId);
  data.photos[photoIndex].comments.push(action.data.comment);
  _PhotosStore.emitChange();
}

class PhotosStore extends EventEmitter {

    getState() {
        return data;
    }

    getPhotoById(photoId) {
      return _.cloneDeep(data.photos[this.getPhotoIndexById(photoId)]);
    }

    getPhotoIndexById(photoId) {
      let {photos} = data;

      return _.findIndex(photos, (photo) => {
        return photo._id === photoId;
      });
    }

    emitChange() {
        this.emit('CHANGE');
    }

    addChangeListener(cb) {
        this.on('CHANGE', cb);
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
    }
}

let _PhotosStore = new PhotosStore();
export default _PhotosStore;

AppDispatcher.register((payload) => {
    let action = payload.action;

    if (action.type === 'ADDED_COMMENT') {
      addComment(action);
    }

    if (action.type === 'LOADED_ALL_PHOTOS') {
      loadAllPhotos(action);
    }
});
