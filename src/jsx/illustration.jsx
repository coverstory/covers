var React = require('react/addons');

var Illustration = React.createClass({

  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    var colors = ['#0000FF', '#00FF00', '#FFFF00', '#00FFFF'];
    var color = colors[this.state.secondsElapsed % colors.length];
    return (
      <g id="cover-illustration" width="100%" height="100%">
        <rect x="0" y="0" height="50%" width="50%" fill={color} />
        <rect x="50%" y="50%" height="50%" width="50%" fill={color} />
        <rect x="25%" y="25%" height="50%" width="50%" fill={color} />
      </g>
    )
  }

});

module.exports = Illustration;
