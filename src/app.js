var React = require('react')
var ReactDom = require('react-dom')
var header1 = require('./header1')
var div = React.Dom.div

var allMyHeaders = (
	div(null,
		React.createElement(header1, {color: 'blue', title: 'damn'})
	)
	
)

reactDOM.render(AllMyHeaders, document.getElementById('app'));