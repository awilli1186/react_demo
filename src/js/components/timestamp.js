import React from 'react/addons';

class TimeStamp extends React.Component {
  render() {
    return (
      <div className="timestamp">
        {this.props.created}
      </div>
    )
  }
}

export default TimeStamp;
