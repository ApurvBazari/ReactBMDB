'use strict'

import React from 'react'
import {Radio, MenuItem, Form, FormGroup, Col, FormControl, Button, Checkbox, Row, ControlLabel, DropdownButton} from 'react-bootstrap'

class Filter extends React.Component{
	componentWillMount = () => {
		this.setState({
			genres: [],
			year: null,
			sort: null
		});
	}

	toggleFilter = () => {
		this.props.toggleFilter();
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this, e);
	}

	handleGenre = (e) => {
		let genre = e.target.value;
		let genres = [];
		let flag = false;
		this.state.genres.forEach((sGenre) => {
			if (sGenre != genre) {
				genres.push(sGenre)
			} else {
				flag = true;
			}
		});
		if (!flag) {
			genres.push(genre);
		}
		this.setState({
			genres: genres
		});
	}

	handleYear = (e) => {
		let year = e.target.value;
		this.setState({
			year: year
		});
	}

	handleSort = (selectedKey) => {
		console.log(selectedKey);
		let sort;
		switch(selectedKey) {
			case 1: sort = 'popularity.asc';
					break;
			case 2: sort = 'popularity.desc';
					break;
			case 3: sort = 'release_date.asc';
					break;
			case 4: sort = 'release_date.desc';
					break;
			case 5: sort = 'revenue.asc';
					break;
			case 6: sort = 'revenue.desc';
					break;
			case 7: sort = 'vote_average.asc';
					break;
			case 8: sort = 'vote_average.desc';
					break;
			case 9: sort = 'vote_count.asc';
					break;
			case 10: sort = 'vote_count.desc';
					break;
			default: sort = 'popularity.asc';
					break;
		}
		this.setState({
			sort: sort
		});
	}

	render() {
		console.log(this.state);
		let genreList = [];
		this.props.genres.forEach((genre) => {
			genreList.push(<Checkbox value={genre.name} key={genre.id} onChange={this.handleGenre.bind(this)}>{genre.name}</Checkbox>)
		});
		let years = [2017,2016,2015,2014,2013,2012,2011,2010];
		let yearList = [];
		years.forEach((year) => {
			yearList.push(<Radio name='yearFilter' value={year} key={year} onChange={this.handleYear.bind(this)}>{year}</Radio>)
		});
		return (
			<div>
			<h1>Select Filter Options</h1>
			<Form horizontal onSubmit={this.onSubmit} className="filterForm">
				<FormGroup name="genreGroup">
					<Col sm={2}>
						<ControlLabel>
							Genre type
						</ControlLabel>
					</Col>
					<Col sm={10}>
						{genreList}
					</Col>
				</FormGroup>
				<FormGroup name="certificationGroup">
					<Col sm={2}>
						<ControlLabel>
							Year
						</ControlLabel>
					</Col>
					<Col sm={10}>
						{yearList}
					</Col>
				</FormGroup>
				<FormGroup>
					<Col sm={2}>
						<ControlLabel>
							Sort by
						</ControlLabel>
					</Col>
					<DropdownButton bsStyle='default' title='Sort by' id='sortByFilter' onSelect={this.handleSort.bind(this)}>
						<MenuItem eventKey={1}>Popularity: High to Low</MenuItem>
						<MenuItem eventKey={2}>Popularity: Low to Highgh</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3}>Release date: High to Low</MenuItem>
						<MenuItem eventKey={4}>Release date: Low to High</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={5}>Revenue: High to Low</MenuItem>
						<MenuItem eventKey={6}>Revenue: Low to High</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={7}>Vote Average: High to Low</MenuItem>
						<MenuItem eventKey={8}>Vote Average: Low to High</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={9}>Vote Count: High to Low</MenuItem>
						<MenuItem eventKey={10}>Vote Count: Low to High</MenuItem>
					</DropdownButton>
				</FormGroup>
				<FormGroup className="filterButtons">
					<Col sm={12}>
					<Button type="submit" bsStyle="primary">Filter Results</Button>
					<Button bsStyle="danger" onClick={this.toggleFilter.bind(this)}>Close Filter</Button>
					</Col>
				</FormGroup>
			</Form>
			</div>
		)
	}
}

export default Filter;