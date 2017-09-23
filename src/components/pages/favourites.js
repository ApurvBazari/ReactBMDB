'use strict'

import React from 'react'
import {connect} from 'react-redux'
import Card from '../component/card.js'
import {Button, Grid, Row} from 'react-bootstrap'

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
			<Grid>
				<Row>
					<p><h1>Favourite Movies Added</h1></p>
				{movies.map((movie, i) => {
					return (
						<Card data={movie} key={i} handleClick={this.handleDislike.bind(this)} />
					)					
				})}
				</Row>
			</Grid>
		)
	}
}
 export default Favourites;