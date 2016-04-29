var React = require('react');
var ReactDOM = require('react-dom');

var MeditateActions = React.createClass({
  render: function () {
    var buttons;
    if (this.props.running) {
      buttons = (
        <div>
          <button onClick={this.props.pause}>Pause</button>
          <button onClick={this.props.reset}>Reset</button>
        </div>
      )
    } else {
      buttons = (
        <button className="btn btn-success btn-lg" onClick={this.props.start}>Start</button>
      )
    }
    return(
      <div>
        {buttons}
      </div>
    );
  }
});

module.exports = MeditateActions;