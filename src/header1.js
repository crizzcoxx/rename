const React = require('react')
const ReactDOM = require('react-dom')

const Header1 = React.createClass ({
	render () {
		return(
			<div>
				<h1 style= {{color: this.props.color}}> {this.props.title}
				</h1>
			</div>
		)
	}
})

module.exports = Header1