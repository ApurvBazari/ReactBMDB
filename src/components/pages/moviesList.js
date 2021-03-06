'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button, Grid, Row} from 'react-bootstrap'

import Filter from '../component/filterForm.js'
import Card from '../component/card.js'
import Navigationbar from '../component/navbar.js'
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
		let newList = [];
		let flag = false;
		let favouriteMovies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
    	favouriteMovies.forEach((favourite) => {
    		if (favourite.id != movie.id) {
    			newList.push(favourite)
    		} else {
    			flag = true;
    		}
    	});
    	if (!flag) {
    		newList.push(movie)
    	}
    	localStorage.setItem("favouriteMovies", JSON.stringify(newList));
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

	filterResults = (genres, year, sort) => {
		console.log(genres, year, sort);
		let addGenres, addYear, addSort;
		if (genres) {
			addGenres = `&with_genres=${genres}`
		}
		if (year) {
			addYear = `&primary_release_year=${year}`
		}
		if (sort) {
			addSort = `&sort_by=${sort}`
		}
		let url = `https://api.themoviedb.org/3/discover/movie?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US${addGenres ? addGenres : ''}${addYear ? addYear : ''}${addSort ? addSort : ''}`;
		console.log(url);
		this.props.itemsFetchData(url);
	}

	render() {
		let filter;
		if (this.state.filterChecked) {
			filter = <Filter toggleFilter={this.toggleFilter.bind(this)} genres={this.state.genres} filterResults={this.filterResults.bind(this)}/>
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
				<Navigationbar className="navHeader" handleSelect={this.toggleNavbar.bind(this)} type="movie"/>
				<Row>
					<div className="filterClass">{filter}</div>
					<div className="list">{movielist}</div>
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