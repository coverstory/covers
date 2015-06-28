var React = require('react/addons');

var Illustration = React.createClass({

  render: function() {
    return (
      <g id="cover-illustration" width="100%" height="100%">
        <rect x="0" y="0" height="50%" width="50%" fill="#0000FF" />
        <rect x="50%" y="50%" height="50%" width="50%" fill="#00FF00" />
        <rect x="25%" y="25%" height="50%" width="50%" fill="#FFFF00" />
      </g>
    )
  }

});

module.exports = Illustration;
