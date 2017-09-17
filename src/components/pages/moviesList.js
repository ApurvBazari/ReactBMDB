'use strict'

import React from 'react'
import {connect} from 'react-redux'

class MovieList extends React.Component{
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Popular Movies</h1>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.items.items
	}
}

export default connect(mapStateToProps)(MovieList);