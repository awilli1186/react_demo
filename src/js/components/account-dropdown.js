import React from 'react/addons';

class AccountDropdown extends React.Component {
  render() {
    return (
      <div className="account">{this.props.user}</div>
    )
  }
}

export default AccountDropdown;
