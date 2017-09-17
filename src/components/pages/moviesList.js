'use strict'

import React from 'react'
import {connect} from 'react-redux'
import MovieCard from '../component/movieCard.js'

class MovieList extends React.Component{
	render() {
		console.log(this.props.movies, movielist);
		let movielist = [];
		if(this.props.movies) {
			this.props.movies.map((movie, i) => {
				movielist.push(<MovieCard movie={movie} />)
			});
		}
		return (
			<div>
				<h1>Popular Movies</h1>
				{movielist}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.items.results
	}
}

export default connect(mapStateToProps)(MovieList);