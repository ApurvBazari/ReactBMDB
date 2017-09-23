'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button, Grid, Row} from 'react-bootstrap'

import Card from '../component/card.js'
import Navbar from '../component/navbar.js'
import {itemsFetchData} from '../../actions/fetchItems.js'
import {Filter} from '../component/filterForm.js'

class TvList extends React.Component{
	componentWillMount = () => {
		let url = 'https://api.themoviedb.org/3/tv/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
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

	toggleFilter = () => {
  		let genreUrl = 'https://api.themoviedb.org/3/genre/tv/list?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US';
  		let genres = this.props.itemsFetchData(genreUrl)
  			.then((res) => res.items)
  			.then((items) => {
  				this.setState({
  					filterChecked: this.state.filterChecked ? false : true, 
  					genres: items.genres
  				});
  			})
  	}

	render() {
		let tvlist = [];
		let filter;
		if (this.state.filterChecked) {
			filter = <Filter toggleFilter={this.toggleFilter.bind(this)} genres={this.state.genres} filterResults={this.filterResults.bind(this)}/>
		} else {
			filter = <Button onClick={this.toggleFilter.bind(this)}>Filter</Button>
		}
		if(this.props.tvSeries) {
			this.props.tvSeries.map((tv, i) => {
				tvlist.push(<Card data={tv} key={i} handleClick={this.handleLike.bind(this)} filterResults ={this.filterResults.bind(this)}/>)
			});
		}
		return (
			<Grid>
				<Navbar handleSelect={this.handleNavbar.bind(this)} />
				<Row>
					{filter}
					{tvlist}
				</Row>
			</Grid>
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