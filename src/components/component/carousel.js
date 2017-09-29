import React from 'react'
import Card from './card.js'

class Carousel extends React.Component {
	fetchImage = (url) => {

	}

	render () {
		console.log(this.props);
		let data = this.props.data;
		let cards = [];
		if (data) {
			data.forEach((data, i) => {
				cards.push(<Card className="carousel-card" data={data} key={i} />)
			});
		}
		return (
			<div className="carousel">
				<h1>{this.props.title} {this.props.type}s</h1>
				<p>{this.props.similar}</p>
				<ul className="panes">
					<li className="cards">
						{cards}
					</li>
					<div className="carousel-control">
						<i className="glyphicon glyphicon-chevron-left"></i>
        			</div>
        			<div className="carousel-control">
        				<i className="glyphicon glyphicon-chevron-right"></i>
					</div>
				</ul>	
			</div>
		)
	}
}

export default Carousel;