'use strict'

import React from 'react'
import {Radio, MenuItem, Form, FormGroup, Col, FormControl, Button, Checkbox, Row, ControlLabel, DropdownButton} from 'react-bootstrap'
import Select from 'react-select'

class Filter extends React.Component{
	componentWillMount = () => {
		this.setState({
			genres: [],
			year: null,
			sort: null,
			sortValue: null
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
		switch(selectedKey.value) {
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
			sort: sort,
			sortValue: selectedKey.value
		});
	}

	filterResults = () => {
		this.props.filterResults(this.state.genres, this.state.year, this.state.sort);
		this.toggleFilter();
	}

	render() {
		console.log(this.state);
		let genreList = [];
		this.props.genres.forEach((genre) => {
			genreList.push(<Checkbox value={genre.id} key={genre.id} onChange={this.handleGenre.bind(this)}>{genre.name}</Checkbox>)
		});
		
		let years = [2017,2016,2015,2014,2013,2012,2011,2010];
		let yearList = [];
		years.forEach((year) => {
			yearList.push(<Radio name='yearFilter' value={year} key={year} onChange={this.handleYear.bind(this)}>{year}</Radio>)
		});
		
		let options = [
			{value: 1, label: 'Popularity: High to Low'},
			{value: 2, label: 'Popularity: Low to High'},
			{value: 3, label: 'Release date: High to Low'},
			{value: 4, label: 'Release date: Low to High'},
			{value: 5, label: 'Revenue: High to Low'},
			{value: 6, label: 'Revenue: Low to High'},
			{value: 7, label: 'Vote Average: High to Low'},
			{value: 8, label: 'Vote Average: Low to High'},
			{value: 9, label: 'Vote Count: High to Low'},
			{value: 10, label: 'Vote Count: Low to High'}
		];

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
					<Col sm={10}>
						<Select placeholder="Sort by" name="sortSelect" value={this.state.sortValue} options={options} onChange={this.handleSort.bind(this)}/>
					</Col>
				</FormGroup>
				<FormGroup className="filterButtons">
					<Col sm={12}>
					<Button type="submit" bsStyle="primary" onClick={this.filterResults.bind(this)}>Filter Results</Button>
					<Button bsStyle="danger" onClick={this.toggleFilter.bind(this)}>Close Filter</Button>
					</Col>
				</FormGroup>
			</Form>
			</div>
		)
	}
}

export default Filter;