import React from 'react/addons';
import AccountDropdown from './account-dropdown';

class SiteNav extends React.Component {
  render() {
    return (
      <header className="top">
        <div className="wrapper">
          <h1>{this.props.name}</h1>

          <nav>
            <input type="text" placeholder="search"/>
            <AccountDropdown user='adam'/>
          </nav>
        </div>
      </header>
    )
  }
}

export default SiteNav;
