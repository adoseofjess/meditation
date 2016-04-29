var React = require('react');
var ReactDOM = require('react-dom');

var SessionPicker = React.createClass({
  render: function () {
    return(
      <div>
        <button className="btn btn-info btn-sm" onClick={this.props.setLongSession}>Long Session</button>
        <button className="btn btn-info btn-sm" onClick={this.props.setShortSession}>Short Session</button>
      </div>
    );
  }
});

module.exports = SessionPicker;