var React = require('react/addons');

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

module.exports = Title;
