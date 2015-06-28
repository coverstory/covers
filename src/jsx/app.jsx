var React = require('react/addons');
var Cover = require('./cover.jsx');

var App = React.createClass({
    render: function() {
        return(
            <div class="cover">
                <Cover />
                <h1>Moby Dick</h1>
            </div>
        )
    }
});

React.render(<App />, document.getElementById('app'));

