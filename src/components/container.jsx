var React = require('react');
var ReactDOM = require('react-dom');
var SessionPicker = require('./sessionPicker');
var MeditateActions = require('./meditateActions');
var Countdown = require('./countdown');

var Container = React.createClass({
  getInitialState: function() {
    return {
      longSessionCountdown: 1200,
      shortSessionCountdown: 300,
      originalCountdown: 300,
      countdown: 300,
      running: false
    }
  },

  tick: function() {
    if (this.state.running) {
      this.setState({countdown: this.state.countdown - 1});
    }
    
    if (this.state.countdown <= 0) {
      if (this.state.running == true) {
        var sound = document.getElementById("audio");
        sound.play();
      }

      this.setState({running: false})
    }
  },

  setLongSession: function() {
    this.setState({originalCountdown: this.state.longSessionCountdown, countdown: this.state.longSessionCountdown, running: false})
  },

  setShortSession: function() {
    this.setState({originalCountdown: this.state.shortSessionCountdown, countdown: this.state.shortSessionCountdown, running: false})
  },

  updateCountdown: function(seconds) {
    this.setState({originalCountdown: this.state.originalCountdown + seconds, countdown: this.state.countdown + seconds});
  },

  start: function() {
    if (this.state.running == false) {
      this.setState({running: true});
    }
  },

  pause: function() {
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
      <div className="container">
        <Countdown countdown={this.state.countdown} updateCountdown={this.updateCountdown} />
        <SessionPicker setLongSession={this.setLongSession} setShortSession={this.setShortSession}/>
        
        <MeditateActions running={this.state.running} start={this.start} pause={this.pause} reset={this.reset} />
      </div>
    );
  }
});

module.exports = Container;