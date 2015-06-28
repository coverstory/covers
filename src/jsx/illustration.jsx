var React = require('react/addons');

var Triangle = require('./shapes/triangle.jsx');
var Pentagon = require('./shapes/pentagon.jsx');

var Illustration = React.createClass({

  across: function() {
    return (
      <g className="across cover-illustration" width="100%" height="100%">
        <rect x="0" y="33%" height="33%" width="33%" fill="#0000FF" />
        <rect x="33%" y="33%" height="33%" width="33%" fill="#00FF00" />
        <rect x="66%" y="33%" height="33%" width="33%" fill="#FFFF00" />
      </g>
    )
  },

  down: function() {
    return (
      <g className="down cover-illustration" width="100%" height="100%">
        <rect x="33%" y="0%" height="33%" width="33%" fill="#0000FF" />
        <rect x="33%" y="33%" height="33%" width="33%" fill="#00FF00" />
        <rect x="33%" y="66%" height="33%" width="33%" fill="#FFFF00" />
      </g>
    )
  },

  diagonal: function() {
    return (
      <g className="diagonal" width="100%" height="100%">
        <rect x="0" y="0" height="50%" width="50%" fill="#0000FF" />
        <rect x="50%" y="50%" height="50%" width="50%" fill="#00FF00" />
        <rect x="25%" y="25%" height="50%" width="50%" fill="#FFFF00" />
      </g>
    )
  },

  circle: function() {
    return <circle cx="50%" cy="50%" r="25%" fill="#FFFFFF" id="center-circle" />
  },

  triangle: function() {
    return <Triangle />
  },

  pentagon: function() {
    return <Pentagon />
  },

  render: function() {
    var circle = this.circle();
    var triangle = this.triangle();
    var pentagon = this.pentagon();
    return (
      <g className="cover-illustration">
        {circle}
        {triangle}
        {pentagon}
      </g>
    )
  }

});

module.exports = Illustration;
