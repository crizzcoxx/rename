var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var h2 = React.DOM.h2

var header2 = React.createClass ({
	render () {
		return(
			div(null,
				h2({style: {color: this.props.color}}, this.props.title)
			)
		)
	}
})

module.exports = header2