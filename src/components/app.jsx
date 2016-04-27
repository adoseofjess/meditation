var React = require('react');
var ReactDOM = require('react-dom');
var SessionPicker = require('./sessionPicker');
var MeditateActions = require('./meditateActions');

var App = React.createClass({
  getInitialState: function() {
    return {
      longSessionCountdown: 500,
      shortSessionCountdown: 100,
      originalCountdown: 100,
      countdown: 100,
      running: false
    }
  },

  tick: function() {
    if (this.state.running) {
      this.setState({countdown: this.state.countdown - 1});
    }
  },

  setLongSession: function() {
    this.setState({originalCountdown: this.state.longSessionCountdown, countdown: this.state.longSessionCountdown, running: false})
  },

  setShortSession: function() {
    this.setState({originalCountdown: this.state.shortSessionCountdown, countdown: this.state.shortSessionCountdown, running: false})
  },

  start: function() {
    if (this.state.running == false) {
      this.setState({running: true});
    }
  },

  stop: function() {
    if (this.state.running == true) {
      this.setState({running: false});
    }
  },

  reset: function() {
    if (this.state.running == true) {
      this.setState({running: false})
    }
    this.setState({countdown: this.state.originalCountdown})
  },

  componentDidMount: function() {
    setInterval(this.tick, 1000);
  },

  render: function () {
    return(
      <div>
        <h1>My Meditation Countdown Timer</h1>
        <div>Countdown: {this.state.countdown}</div>
        <SessionPicker setLongSession={this.setLongSession} setShortSession={this.setShortSession}/>
        
        <MeditateActions running={this.state.running} start={this.start} stop={this.stop} reset={this.reset} />
      </div>
    );
  }
});

module.exports = App;