import React from 'react/addons';
import Photo from './photo';
import PhotosViewActions from '../actions/photos-view';
import PhotosStore from '../stores/photos';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Photos extends React.Component {
  static propTypes: {
    comments: React.PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    PhotosStore.addChangeListener(this._onChange.bind(this));
    PhotosViewActions.loadAll();
  }

  _onChange() {
    this.setState(PhotosStore.getState())
  }

  render() {
    let photos = this.state.photos.sort((a, b) => {
      return a._id - b._id;
    });

    let items = [];

    if (!photos.length) {
      return (
        <div className="photos">
          No photos yet.
        </div>
      )
    }

    return (
      <div className="photos">
        <ReactCSSTransitionGroup transitionName="photos" transitionAppear={true}>
          {
            photos.map((photo) => {
              return <Photo {...photo} key={photo._id}/>
            })
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Photos;
