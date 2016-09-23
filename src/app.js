var React = require('react')
var ReactDom = require('react-dom')
var div = React.Dom.div

var myComponent = React.creatClass({
	render() {
		return (
			div(null, h1({style: color: blue}))
			)

		);

	}
})

reactDOM.render(myComponent, document.getElementById('app'));