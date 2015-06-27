var React = require('react/addons');
var Cover = require('./cover.jsx');

var App = React.createClass({
    render: function(){
        return (
            <div className="cover">
                <Cover />
            </div>
        )
    }
});

React.render(<App />, document.getElementById('app'));

