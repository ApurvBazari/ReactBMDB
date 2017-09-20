'use strict'

import React from 'react'
import {connect} from 'react-redux'
import MovieCard from '../component/movieCard.js'

class Favourites extends React.Component{
	handleDislike = (movieRemove) => {
		let newList = []
		let movies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
		movies.forEach((movie) => {
			if (movie.id != movieRemove.id) {
				newList.push(movie);
			}
		});
		this.setState({
			favouriteMovies: newList
		});
		localStorage.setItem("favouriteMovies", JSON.stringify(newList));
	}

	render() {
		let movies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
		return(
			<div>
				<p>Favourite Movies Added</p>
				{movies.map((movie, i) => {
					return (
						<MovieCard movie={movie} key={i} handleLike={this.handleDislike.bind(this)} />
					)					
				})}
			</div>
		)
	}
}
 export default Favourites;