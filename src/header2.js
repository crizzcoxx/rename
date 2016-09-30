const React = require('react')
const ReactDOM = require('react-dom')

const Header2 = React.createClass ({
	render () {
		return(
			<div>
				<h2 style= {{color: this.props.color}}> {this.props.title}
				</h2>
			</div>
		)
	}
})

module.exports = Header2