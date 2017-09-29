'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {itemsFetchData} from '../../actions/fetchItems.js'
import {creditsFetchData} from '../../actions/fetchCredits.js'
import {fetchImages} from '../../actions/fetchImages.js'
import {fetchVideos} from '../../actions/fetchVideos.js'
import {fetchSimilar} from '../../actions/fetchSimilar.js'
import {fetchRecommendation} from '../../actions/fetchRecommendations.js'

import Carousel from '../component/carousel.js'

class Profile extends React.Component{
	componentWillMount = () => {
		console.log(this.props.match.params.value);
		let id = this.props.match.params.valueId;
		let type = this.props.match.params.type;
		let profileUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US`;
		let creditsUrl = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=d115fba9257637e7caf1dbc7a75a11d6`;
		let imageUrl = `https://api.themoviedb.org/3/${type}/${id}/images?api_key=d115fba9257637e7caf1dbc7a75a11d6`;
		let videosUrl = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=d115fba9257637e7caf1dbc7a75a11d6`;
		let similarUrl = `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1`;
		let recommendationsUrl = `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=1`;
		this.props.fetchSimilar(similarUrl);
		this.props.fetchVideos(videosUrl);
		this.props.fetchImages(imageUrl);
		this.props.fetchCredits(creditsUrl);
		this.props.fetchProfile(profileUrl);
		this.props.fetchRecommendation(recommendationsUrl);
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
		}

		return (
			<section className="profileBackground">
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
				<div className="profile-cast">
					<Carousel data={this.props.cast} title="Cast" />
				</div>
				<div className="profile-trailers">
					<Carousel data={this.props.videos} title="Trailer" />
				</div>
				<div className="profile-recommendations">
					<Carousel data={this.props.recommendations} title="Recommendation" type={this.props.match.params.type} />
				</div>
				<div className="similar-profiles">
					<Carousel data={this.props.similar} title="Similar" type={this.props.match.params.type} />
				</div>
			</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.items,
		cast: state.credits.cast,
		crew: state.credits.crew,
		images: state.images,
		poster: state.images.posters ? state.images.posters[0] : undefined,
		videos: state.videos.results,
		similar: state.similar.results,
		recommendations: state.recommendations.results
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProfile: bindActionCreators(itemsFetchData, dispatch),
		fetchCredits: bindActionCreators(creditsFetchData, dispatch),
		fetchImages: bindActionCreators(fetchImages, dispatch),
		fetchVideos: bindActionCreators(fetchVideos, dispatch),
		fetchSimilar: bindActionCreators(fetchSimilar, dispatch),
		fetchRecommendation: bindActionCreators(fetchRecommendation, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);