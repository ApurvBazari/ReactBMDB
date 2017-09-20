'use strict'

import React from 'react'
import Header from './components/component/header.js'
import Footer from './components/component/footer.js'

class Main extends React.Component{
	render() {
		return (
			<div>
				<Header />
					{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default Main;