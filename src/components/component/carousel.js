import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class Carousel extends React.Component {
	fetchImage = (imagePath) => {
		return `https://image.tmdb.org/t/p/w300/${imagePath}`;
	}

	render () {
		let data = this.props.data;
		let cards = [];
		if (data) {
			data.forEach((data, i) => {
				let title = data.original_title ? data.original_title : data.name;
				cards.push(
					<div className="item" key={i}>
						<img className="item-image" src={this.fetchImage(data.profile_path || data.backdrop_path)} />
						<p className="item-title">{title}</p>
					</div>
				)			
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
					<a className="carousel-control left" href="#myCarousel" data-slide="prev">
						<i className="glyphicon glyphicon-chevron-left"></i>
					</a>
					<a href="#myCarousel " className="carousel-control right" data-slide="next">
        				<i className="glyphicon glyphicon-chevron-right"></i>
					</a>
				</div>
				</div>
		)
	}
}

export default Carousel;