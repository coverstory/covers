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

var Title = React.createClass({
  getDefaultProps: function() {
    return {
      color: "#FFFFFF",
      backgroundColor: "#000000",
      height: "25%",
      width: "100%"
    }
  },

  render: function() {
    return (
      <rect fill={this.props.backgroundColor} width={this.props.width} height={this.props.height} x="0" y="0" />
    )
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
    // z-index ordering is related to the tag's position within the SVG
    // the topmost element has the lowest z-index
    // the bottommost element has the highest z-index
    return (
      <svg width={this.props.width} height={this.props.height} id="cover">
        <Background color="#00FF00" />
        <Title />
      </svg>
    );
  }
});

module.exports = Cover;
