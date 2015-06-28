var React = require('react/addons');

var Pentagon = React.createClass({
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
                <polygon points="24.999,0 50,24.098 40.448,50 9.549,50 0,24.098 "/>
            </svg>
        )
    }
});

module.exports = Pentagon;
