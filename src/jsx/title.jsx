/* Generating a title component should do some analysis on the title
in order to render multiple lines of text, if necessary. If there are
multiple lines, then the title area should be resized as appropriate. */

var React = require('react/addons');

var Title = React.createClass({
  getDefaultProps: function() {
    return {
      title: "Moby Dick",
      color: "#FFFFFF",
      backgroundColor: "#000000",
      height: "25%",
      width: "100%"
    }
  },

  render: function() {
    return (
      <g id="cover-title">
        <rect fill={this.props.backgroundColor} width={this.props.width} height={this.props.height} x="0" y="0" />
        <text fill={this.props.color} x="16" y="15%" fontSize="32" fontFamily="serif">{this.props.title}</text>
      </g>
    )
  }
});

module.exports = Title;
