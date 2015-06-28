var React = require('react/addons');
var Cover = require('./cover.jsx');

var App = React.createClass({

  render: function() {
    var book = {
      title: 'Alice in Wonderland',
      author: 'Lewis Carroll'
    }
    return(
      <Cover book={book} />
    )
  }
});

React.render(<App />, document.getElementById('app'));
