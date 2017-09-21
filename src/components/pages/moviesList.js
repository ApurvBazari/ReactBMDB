'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button, Grid, Row} from 'react-bootstrap'

import Filter from '../component/filterForm.js'
import Card from '../component/card.js'
import Navbar from '../component/navbar.js'
import {itemsFetchData} from '../../actions/fetchItems.js'

class MovieList extends React.Component{
	componentWillMount = () => {
		let url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}';
		this.props.itemsFetchData(url);
		this.setState({
			filterChecked: false
		})
	}

	handleLike = (movie) => {
		console.log('Liked:', movie);
    	let favouriteMovies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
    	favouriteMovies[favouriteMovies ? favouriteMovies.length : 0] = movie;
    	localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  	}

  	toggleFilter = () => {
  		let genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US';
  		let genres = this.props.itemsFetchData(genreUrl)
  			.then((res) => res.items)
  			.then((items) => {
  				this.setState({
  					filterChecked: this.state.filterChecked ? false : true, 
  					genres: items.genres
  				});
  			})
  	}

  	toggleNavbar = (i) => {
		let url;
		switch(i) {
			case 1: url = 'https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
					break;
			case 3: url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
					break;
			case 4: url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
					break;
			case 5: url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
					break;
			default: url = ''; 
					break;
		}
		this.props.itemsFetchData(url);
	}

	render() {
		let filter;
		if (this.state.filterChecked) {
			filter = <Filter toggleFilter={this.toggleFilter.bind(this)} genres={this.state.genres} />
		} else {
			filter = <Button onClick={this.toggleFilter.bind(this)}>Filter</Button>
		}
		let movielist = [];
		if(this.props.movies) {
			this.props.movies.map((movie, i) => {
				movielist.push(<Card data={movie} key={i} handleClick={this.handleLike.bind(this)}/>)
			});
		}
		return (
			<Grid fluid>
				<Navbar handleSelect={this.toggleNavbar.bind(this)} />
				<Row>
					<h1>Popular Movies</h1>
					<div>{filter}</div>
					<div>{movielist}</div>
				</Row>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.items.results
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		itemsFetchData: bindActionCreators(itemsFetchData, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);