var React = require('react/addons');

var gradients = require('./gradients.js');

var Background = React.createClass({

  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 5000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    var index = this.state.secondsElapsed % gradients.length;
    var color1 = gradients[index].color1;
    var color2 = gradients[index].color2;
    return (
      <g>
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor={color1} offset="0%" />
            <stop stopColor={color2} offset="100%" />
          </linearGradient>
        </defs>
        <rect fill={color1} width="100%" height="100%" x="0" y="0" id="cover-background" />
      </g>

    );
  }
});

module.exports = Background;
