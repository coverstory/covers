var React = require('react/addons');

var HEIGHT = 2360;
var WIDTH = 1800;

var Background = React.createClass({
  getDefaultProps: function() {
    return {
      color: "#FF0000"
    }
  },

  render: function() {
    return (
      <rect fill={this.props.color} width="100%" height="100%" x="0" y="0" id="cover-background" />
    );
  }
});

var Cover = React.createClass({
  getDefaultProps: function() {
    return {
      width: WIDTH/6,
      height: HEIGHT/6
    }
  },

  render: function() {
    return (
      <svg width={this.props.width} height={this.props.height} id="cover">
        <Background color="#00FF00" />
      </svg>
    );
  }
});

module.exports = Cover;
