var React = require('react');
var ReactDOM = require('react-dom');

var SessionPicker = React.createClass({
  render: function () {
    return(
      <div>
        <button onClick={this.props.setLongSession}>Long Session</button>
        <button onClick={this.props.setShortSession}>Short Session</button>
      </div>
    );
  }
});

module.exports = SessionPicker;