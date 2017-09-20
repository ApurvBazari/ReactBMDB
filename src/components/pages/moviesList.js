'use strict'

import React from 'react'
import {connect} from 'react-redux'
import MovieCard from '../component/movieCard.js'

class MovieList extends React.Component{
	handleLike = (movie) => {
		console.log('Liked:', movie);
    	let favouriteMovies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
    	favouriteMovies[favouriteMovies ? favouriteMovies.length : 0] = movie;
    	localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  	}

	render() {
		let movielist = [];
		if(this.props.movies) {
			this.props.movies.map((movie, i) => {
				movielist.push(<MovieCard movie={movie} key={i} handleLike={this.handleLike.bind(this)}/>)
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