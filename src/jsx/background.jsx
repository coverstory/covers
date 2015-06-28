var React = require('react/addons');

var gradients = require('./gradients.js');

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

module.exports = Background;
