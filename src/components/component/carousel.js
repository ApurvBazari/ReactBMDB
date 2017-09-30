import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Carousel extends React.Component {
	fetchImage = (imagePath) => {
		return `https://image.tmdb.org/t/p/w300/${imagePath}`;
	}
	
	fetchVideo = (videoKey) => {
		return `https://www.youtube.com/embed/${videoKey}`;
	}

	render () {
		let data = this.props.data;
		let cards = [];
		if (data) {
			data.forEach((data, i) => {
				let title = data.original_title ? data.original_title : data.name;
				let titleSuffix = data.character ? ` as ${data.character}` : '';
				if (data.type === 'Trailer') {
					cards.push (
						<div className="item" key={i}>
							<iframe className="item-videos" src={this.fetchVideo(data.key)} />
							<p className="item-title">{title}{titleSuffix}</p>
						</div>
					)
				} else {
					cards.push(
						<div className="item" key={i}>
						<Link to={`/${data.title ? 'movie': 'tv'}/details/id=${data.id}`}>
							<img className="item-image" src={this.fetchImage(data.poster_path || data.backdrop_path || data.profile_path)} />
						</Link>
							<p className="item-title">{title}{titleSuffix}</p>
						</div>
					)
				}			
			});
		}
		return (
				<div id="myCarousel" className="carousel slide">
				<h1 className="carousel-header">{this.props.title} {this.props.type}s</h1>
				<p>{this.props.similar}</p>
				<div className="carousel-inner">
					<div className="items">
						{cards}
					</div>
				</div>
				</div>
		)
	}
}

export default Carousel;