var React = require('react')
var ReactDOM = require('react-dom')
var header1 = require('./header1.js')
var div = React.DOM.div

var allMyHeaders = (
	div(null,
		React.createElement(header1, {color: 'blue', title: 'damn'})
	)
	
)

reactDOM.render(allMyHeaders, document.getElementById('app'));