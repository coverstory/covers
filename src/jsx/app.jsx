var React = require('react/addons');

var App = React.createClass({
    render: function(){
        return (
            <div className="cover"></div>            
        )
    }
});

React.render(<App />, document.getElementById('app'));

