import React from 'react/addons';

class UserAvatar extends React.Component {
  render() {
    return (
     <div>
       <img src="https://en.gravatar.com/userimage/92929709/08bc11e7d79f3cc3b8875f137f93e0d7.jpg?size=200"/>
       <a href="#">{this.props.user}</a>
     </div>
    )
  }
}


export default UserAvatar;
