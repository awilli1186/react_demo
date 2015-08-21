import AppDispatcher from '../dispatchers/app-dispatcher';

export default {
  loadedAllPhotos(response) {
    AppDispatcher.handleServerAction({
      type: 'LOADED_ALL_PHOTOS',
      data: response
    });
  },

  addedComment(photoId, comment) {
    AppDispatcher.handleServerAction({
      type: 'ADDED_COMMENT',
      data: {
        photoId: photoId,
        comment: comment
      }
    });
  }
}
