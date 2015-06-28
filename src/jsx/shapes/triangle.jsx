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
            <svg x={this.props.x} y={this.props.y} height={this.props.height} width={this.props.width}>
                <polygon points="25,50 0,50 12.5,25 25,0 37.5,25 50,50 "/>
            </svg>
        )
    }
});

module.exports = Triangle;
