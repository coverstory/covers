var React = require('react/addons');

var Background = require('./background.jsx');
var Illustration = require('./illustration.jsx');

var HEIGHT = 2360;
var WIDTH = 1800;

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
        <Background />
        <Illustration />
      </svg>
    );
  }
});

module.exports = Cover;
