'use strict'

import React from 'react'

class Footer extends React.Component{
	render() {
		return(
			<footer className="footer text-center" fluid>
				<div className="container">
					<p className="footer-text">Sample app using TMDB api to fetch data</p>
				</div>
			</footer>
		)
	}
}

export default Footer;