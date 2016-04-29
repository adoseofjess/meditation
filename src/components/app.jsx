var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./container');

var App = React.createClass({

  render: function () {
    return(
      <div>
        <Container />
      </div>
    );
  }
});

module.exports = App;