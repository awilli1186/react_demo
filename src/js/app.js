import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <SiteNav name="Instagramps"/>
        <Photos/>
      </div>
    )
  }
}

class AccountDropdown extends React.Component {
  render() {
    return (
      <div className="account">{this.props.user}</div>
    )
  }
}

class SiteNav extends React.Component {
  render() {
    return (
      <header className="top">
        <div className="wrapper">
          <h1>{this.props.name}</h1>

          <nav>
            <input type="text"  placeholder="search"/> <i className="fa fa-search"></i>
            <AccountDropdown user='Adam'/>
          </nav>
        </div>
      </header>
    )
  }
}

class Photos extends React.Component {
  render() {
    let photos = [
      {
        likes: 1,
        created: '1h',
        url: 'http://lorempixel.com/output/people-q-c-600-600-1.jpg',
        user: 'Adam',
        comments: [
          {user: 'ben', content: 'cool pic'}
        ]
      },

      {
        likes: 5,
        created: '1h',
        url: 'http://lorempixel.com/output/people-q-c-600-600-2.jpg',
        user: 'Julie',
        comments: [
          {user: 'will', content: 'neat!'}
        ]
      },

      {
        likes: 100,
        created: '1h',
        url: 'http://lorempixel.com/output/people-q-c-600-600-3.jpg',
        user: 'Jordan',
        comments: [
          {user: 'ben', content: 'cool pic...'},
          {user: 'julie', content: 'wow, this is great.'}
        ]
      }
    ];

    return (
      <div className="photos">
        {
          photos.map((photo) => {
            return <Photo {...photo}/>
          })
        }
      </div>
    )
  }
}

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
          <AddComment/>
          <PhotoControls/>
        </footer>
      </div>
    )
  }
}

 class UserAvatar extends React.Component {
   render() {
     return (
      <div>
        <img src="https://en.gravatar.com/userimage/92929709/08bc11e7d79f3cc3b8875f137f93e0d7.jpg"/>
        <a href="#">{this.props.user}</a>
      </div>
     )
   }
 }

 class TimeStamp extends React.Component {
   render() {
     return (
       <div className="timestamp">
         {this.props.created}
       </div>
     )
   }
 }

 class Likes extends React.Component {
   render() {
     return (
       <div className="likes">
         {this.props.likes} likes
       </div>
     )
   }
 }

  class Comments extends React.Component {
    render() {
      let comments = this.props.comments;

      return (
        <div className="comments">
          {
            comments.map((comment) => {
              return <Comment {...comment}/>
            })
          }
        </div>
      )
    }
  }

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

class ToggleLike extends React.Component {
  render() {
    return (
      <button className="toggleLikeBtn"><i className="fa fa-heart-o"></i></button>
    )
  }
}

class AddComment extends React.Component {
  render() {
    return (
      <input placeholder="Add Comment..."/>
    )
  }
}

class PhotoControls extends React.Component {
  render() {
    return (
      <button className="controls"><i className="fa fa-ellipsis-h"></i></button>
    )
  }
}

React.render(<App/>, document.getElementById('app'));
