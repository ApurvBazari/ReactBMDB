import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class Carousel extends React.Component {
	fetchImage = (imagePath) => {
		return `https://image.tmdb.org/t/p/w300/${imagePath}`;
	}

	render () {
		console.log(this.props);
		let data = this.props.data;
		let cards = [];
		if (data) {
			data.forEach((data, i) => {
				let title = data.original_title ? data.original_title : data.name;
				cards.push(
					<div className="carouselCard">
						<img className="carouselCard-image" src={this.fetchImage(data.profile_path || data.backdrop_path)} />
						<p className="carouselCard-title">{title}</p>
					</div>
				)			
			});
		}
		return (
			<Grid className="carousel">
				<h1>{this.props.title} {this.props.type}s</h1>
				<p>{this.props.similar}</p>
				<Col className="panes">
					<Col className="carouselCards">
						{cards}
					</Col>
					<Row className="carousel-control">
						<i className="glyphicon glyphicon-chevron-left"></i>
        			</Row>
        			<Row className="carousel-control">
        				<i className="glyphicon glyphicon-chevron-right"></i>
					</Row>
				</Col>	
			</Grid>
		)
	}
}

export default Carousel;