import React from 'react/addons';

import SiteNav from './site-nav';
import Photos from './photos';


class App extends React.Component {
  render() {
    let comments = {
      foo: 'foo'
    };
    return (
      <div className="wrapper">
        <SiteNav name="Instagramps"/>
        <Photos comments={comments}/>
      </div>
    )
  }
}

export default App;
