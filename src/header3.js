var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var h3 = React.DOM.div

var header3 = React.createClass ({
	render () {
		return(
			div(null, 
				h3({style: {color: this.props.color}}, this.props.title)
			)
		)
	}
})

module.exports = header3
