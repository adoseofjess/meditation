var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./container');

var App = React.createClass({

  render: function () {
    return(
      <div>
        <h1>My Meditation Countdown App Timer</h1>
        <Container />
      </div>
    );
  }
});

module.exports = App;