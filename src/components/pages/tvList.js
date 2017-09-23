'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Card from '../component/card.js'
import Navbar from '../component/navbar.js'
import {itemsFetchData} from '../../actions/fetchItems.js'

class TvList extends React.Component{
	componentWillMount = () => {
		let url = 'https://api.themoviedb.org/3/tv/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
		this.props.itemsFetchData(url);
	}

	handleLike = (movie) => {
		console.log('Liked:', movie);
    	let favouriteMovies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
    	favouriteMovies[favouriteMovies ? favouriteMovies.length : 0] = movie;
    	localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  	}

  	handleNavbar = (i) => {
  		//console.log(i);
  		let url;
  		switch(i) {
  			case 1: url = 'https://api.themoviedb.org/3/tv/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
  					break;
  			case 3: url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
  					break;
  			case 4: url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
  					break;
  			case 5: url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
  					break;
  			default: url = 'https://api.themoviedb.org/3/tv/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
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
			addYear = `&first_air_date_year=${year}`
		}
		if (sort) {
			addSort = `&sort_by=${sort}`
		}
		let url = `https://api.themoviedb.org/3/discover/movie?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US${addGenres ? addGenres : ''}${addYear ? addYear : ''}${addSort ? addSort : ''}`;
		console.log(url);
		this.props.itemsFetchData(url);
	}

	render() {
		let tvlist = [];
		if(this.props.tvSeries) {
			this.props.tvSeries.map((tv, i) => {
				tvlist.push(<Card data={tv} key={i} handleClick={this.handleLike.bind(this)} filterResults ={this.filterResults.bind(this)}/>)
			});
		}
		return (
			<div>
				<Navbar handleSelect={this.handleNavbar.bind(this)} />
				<h1>Popular TV Series</h1>
				{tvlist}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		tvSeries: state.items.results
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		itemsFetchData: bindActionCreators(itemsFetchData, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TvList);