var React = require('react/addons');
var Cover = require('./cover.jsx');

var App = React.createClass({

  render: function() {
    var book = {
      title: 'Moby Dick',
      author: 'Herman Melville'
    }
    return(
      <Cover book={book} />
    )
  }
});

React.render(<App />, document.getElementById('app'));
