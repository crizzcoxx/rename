const React = require('react')
const ReactDOM = require('react-dom')
const Header1 = require('./header1.js')
const Header2 = require('./header2.js')
const Header3 = require('./header3.js')
const Heada = require('./header.js')
const MyImage = require('./MyImage.js')

const MyComponents = () => (
	<div>
		<Header1 color='blue' title='damn' />
		<Header2 color='purple' title= 'this shit is' />
		<Header3 color='black' title= 'hard' />
		<Heada color='#79BBDD' />
		<MyImage src='https://lifeasananomaly.files.wordpress.com/2015/02/wpid-photo-20150214004036062.jpg?w=720&h=478' />
	</div>
)

ReactDOM.render(<MyComponents/>, document.getElementById('app'))