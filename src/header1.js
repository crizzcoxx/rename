var React = require('react')
var ReactDom = require('react-dom')
var h1 = React.DOM.h1

var header1 = React.createClass ({
	render () {
		return(
			div(null, 
				h1({style: {color: this.props.color}}, this.props.title)
			)
		)
	}
})

module.exports = header1