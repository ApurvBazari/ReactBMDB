'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {itemsFetchData} from '../../actions/fetchItems.js'

class Profile extends React.Component{
	componentWillMount = () => {
		console.log(this.props.match.params.value);
		let id = this.props.match.params.valueId;
		let type = this.props.match.params.type;
		let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US`;
		this.props.fetchProfile(url);
	}

	getImage = (imagePath) => {
		return `https://image.tmdb.org/t/p/w300/${imagePath}`
	}

	render () {	
		let genres = [];
		let languages = [];		
		if (this.props.data.genres || this.props.data.spoken_languages) {
			this.props.data.genres ? this.props.data.genres.forEach((genre) => {
				genres.push(genre.name+' / ')
			}) : genres = [];
			this.props.data.spoken_languages ? this.props.data.spoken_languages.forEach((language) => {
				languages.push(language.name+' , ');
			}) : this.props.data.languages.forEach((language) => {
				languages.push(language.name+ ' , ');
			})
		}

		let BackgroundImage = this.getImage(this.props.data.poster_path);

		let sectionStyle = {
			backgroundImage: `url(${BackgroundImage})`,
			height: '1000px'
		}

		return (
			<section style = {sectionStyle} className="profileBackground">
			<div className="profile-page">
				<div className="profile-header">
					<img className="profile-image" src={this.getImage(this.props.data.backdrop_path)} />
					<h1 className="profile-title">{this.props.data.title || this.props.data.name}</h1>
					<p className="profile-genre">{genres}</p>
					<i className="glyphicon glyphicon-heart profile-vote">{this.props.data.vote_average}/10</i>
					<i className="glyphicon glyphicon-user profile-votecount">{this.props.data.vote_count}</i>
				</div>
				<div className="profile-details">
					<p className="profile-language">Languages:  {languages}</p>
					<p className="profile-budget">Budget:  ${this.props.data.budget}</p>
					<p className="profile-tagline">Tagline:  {this.props.data.tagline}</p>
					<p className="profile-summary">{this.props.data.overview}</p>
				</div>
			</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProfile: bindActionCreators(itemsFetchData, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);