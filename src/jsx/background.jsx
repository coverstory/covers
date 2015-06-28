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
      <g>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="-50%" x2="0%" y2="125%">
            <stop offset="0">
              <animate attributeName="offset" dur="2s" from="0%" to="80%" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" />
          </linearGradient>
        </defs>
        <rect fill="url(#grad1)" width="100%" height="100%" x="0" y="0" id="cover-background" />
      </g>
    );
  }
});

module.exports = Background;
