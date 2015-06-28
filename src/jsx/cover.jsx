var React = require('react/addons');

var Background = require('./background.jsx');
var Illustration = require('./illustration.jsx');

var HEIGHT = 2360;
var WIDTH = 1800;

var Cover = React.createClass({
  getDefaultProps: function() {
    return {
      width: "100%",
      height: window.innerHeight + 'px'
    }
  },

  render: function() {
    // z-index ordering is related to the tag's position within the SVG
    // the topmost element has the lowest z-index
    // the bottommost element has the highest z-index
    return (
      <div className="cover container">
        <header>
          <h1>{this.props.book.title}</h1>
          <h2>{this.props.book.author}</h2>
        </header>
        <svg width={this.props.width} height={this.props.height} id="cover">
          <Background />
          <Illustration />
        </svg>
      </div>

    );
  }
});

module.exports = Cover;
