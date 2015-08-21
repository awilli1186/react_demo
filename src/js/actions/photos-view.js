import AppDispatcher from '../dispatchers/app-dispatcher';
import PhotosApi from '../apis/photos';


export default {
  loadAll() {
    AppDispatcher.handleViewAction({
      type: 'LOADING_ALL_PHOTOS'
    });

    PhotosApi.getAllPhotos();
  },

  addComment(photoId, user, comment) {
    AppDispatcher.handleViewAction({
      type: 'ADDING_COMMENT'
    });

    PhotosApi.addComment(photoId, user, comment);
  },


}
