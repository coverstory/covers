var React = require('react/addons');

var Cover = React.createClass({
  getDefaultProps: function() {
    return {
      color: '#FF0000',
      width: 300,
      height: 400,
      offset: 100,
      availableHeight: 600
    }
  },

  render: function() {
    var background = <rect fill={this.props.color} width={this.props.width} height={this.props.height} x='0' y='0' />;
    return (
      <svg width={this.props.width} height={this.props.height}>
        {background}
      </svg>
    );
  }
});

module.exports = Cover;
