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
      <div>
        <div>{this.formatTime(this.props.countdown)}</div>
      </div>
    );
  }
});

module.exports = Countdown;