var React = require('react/addons');

var Triangle = React.createClass({
    getDefaultProps: function() {
        return({
            x: "50%",
            y: "50%",
            height: "50%",
            width: "50%"
        })
    },

    render: function() {
        return (
            <svg viewBox="0 0 2 2" x={this.props.x} y={this.props.y} height={this.props.height} width={this.props.width} className="triangle" >
                <polygon points="0,2 1,0 2,2"/>
            </svg>
        )
    }
});

module.exports = Triangle;
