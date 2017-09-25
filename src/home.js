'use strict'

import React from 'react'
import Header from './components/component/header.js'
import Footer from './components/component/footer.js'
import Main from './main.js'


class Home extends React.Component{
	render() {
		return (
			<div>
				<Header />
					<Main />
				<Footer />
			</div>
		)
	}
}

export default Home;