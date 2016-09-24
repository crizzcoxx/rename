var React = require('react')
var ReactDOM = require('react-dom')
var header1 = require('./header1.js')
var header2 = require('./header2.js')
var header3 = require('./header3.js')
var div = React.DOM.div

var allMyHeaders = (
	div(null,
		React.createElement(header1, {color: 'blue', title: 'damn'}),
		React.createElement(header2, {color: 'purple', title: 'this shit\'s'}),
		React.createElement(header3, {color: 'black', title: 'hard'})
	)
	
)

ReactDOM.render(allMyHeaders, document.getElementById('app'));