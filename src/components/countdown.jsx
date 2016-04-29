var React = require('react');
var ReactDOM = require('react-dom');

var Countdown = React.createClass({
  formatTime: function(time) {
    var minutes = parseInt(time / 60)
    var seconds = (time % 60)
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds
  },

  render: function () {
    
    return(
      <div className="countdown">
        <div className="time">{this.formatTime(this.props.countdown)}</div>
        <button onClick={this.props.updateCountdown.bind(null, 60)}>Add minute</button>
        <button onClick={this.props.updateCountdown.bind(null, -60)}>Subtract minute</button>
        <button onClick={this.props.updateCountdown.bind(null, 1)}>Add second</button>
        <button onClick={this.props.updateCountdown.bind(null, -1)}>Subtract second</button>
      </div>
    );
  }
});

module.exports = Countdown;