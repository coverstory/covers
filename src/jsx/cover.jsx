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
    return (
      <svg width="1000" height="1000">
        <rect fill={this.props.color}
        width={this.props.width} height={this.props.height}
        x={this.props.offset} y={this.props.availableHeight - this.props.height} />
      </svg>
    );
  }
});

module.exports = Cover;
