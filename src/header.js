const React = require('react')
const ReactDOM = require('react-dom')

const Heada = React.createClass({
	render () {	
		return (
			<div>
				<header style= {{color: this.props.color}} />
			</div>
		)
	}
})

module.exports = Heada