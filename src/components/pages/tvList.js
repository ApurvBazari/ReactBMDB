'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import MovieCard from '../component/movieCard.js'
import {itemsFetchData} from '../../actions/fetchItems.js'

class TvList extends React.Component{
	componentDidMount = () => {
		let url = 'https://api.themoviedb.org/3/tv/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1';
		this.props.itemsFetchData(url);
	}

	handleLike = (movie) => {
		console.log('Liked:', movie);
    	let favouriteMovies = localStorage.getItem("favouriteMovies") ? JSON.parse(localStorage.getItem("favouriteMovies")) : [];
    	favouriteMovies[favouriteMovies ? favouriteMovies.length : 0] = movie;
    	localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  	}

	render() {
		let movielist = [];
		if(this.props.tvSeries) {
			this.props.tvSeries.map((movie, i) => {
				movielist.push(<MovieCard movie={movie} key={i} handleLike={this.handleLike.bind(this)}/>)
			});
		}
		return (
			<div>
				<h1>Popular tvSeries</h1>
				{movielist}
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