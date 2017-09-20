'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Card from '../component/card.js'
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

	render() {
		let tvlist = [];
		if(this.props.tvSeries) {
			this.props.tvSeries.map((tv, i) => {
				tvlist.push(<Card data={tv} key={i} handleClick={this.handleLike.bind(this)}/>)
			});
		}
		return (
			<div>
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