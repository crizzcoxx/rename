const React = require('react')
const ReactDOM = require('react-dom')

const Header3 = React.createClass ({
	render () {
		return (
			<div> 
				<h3 style= {{color: this.props.color}}> {this.props.title}
				</h3>
			</div>
		)
	}
})

module.exports = Header3
