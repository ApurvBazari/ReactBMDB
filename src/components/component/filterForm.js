'use strict'

import React from 'react'
import {Radio, MenuItem, Form, FormGroup, Col, FormControl, Button, Checkbox, Row, ControlLabel, DropdownButton} from 'react-bootstrap'

class Filter extends React.Component{
	toggleFilter = () => {
		this.props.toggleFilter();
	}

	filterData = () => {
		console.log('Filter Data');
	}

	render() {
		let genreList = [];
		this.props.genres.forEach((genre) => {
			genreList.push(<Checkbox title={genre.name} key={genre.id}>{genre.name}</Checkbox>)
		});
		let years = [2017,2016,2015,2014,2013,2012,2011,2010];
		let yearList = [];
		years.forEach((year) => {
			yearList.push(<Radio key={year}>{year}</Radio>)
		});
		return (
			<div className="filterForm">
			<h1>Select Filter Options</h1>
			<Form horizontal>
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
					<DropdownButton bsStyle='default' title='Sort by' id='sortByFilter'>
						<MenuItem>Rating: High to Low</MenuItem>
						<MenuItem>Rating: Low to High</MenuItem>
						<MenuItem divider />
						<MenuItem>Popularity: High to Low</MenuItem>
						<MenuItem>Popularity: Low to Highgh</MenuItem>
						<MenuItem divider />
						<MenuItem>Release date: High to Low</MenuItem>
						<MenuItem>Release date: Low to High</MenuItem>
						<MenuItem divider />
						<MenuItem>Revenue: High to Low</MenuItem>
						<MenuItem>Revenue: Low to High</MenuItem>
						<MenuItem divider />
						<MenuItem>Vote Average: High to Low</MenuItem>
						<MenuItem>Vote Average: Low to High</MenuItem>
						<MenuItem divider />
						<MenuItem>Vote Count: High to Low</MenuItem>
						<MenuItem>Vote Count: Low to High</MenuItem>
					</DropdownButton>
				</FormGroup>
				<FormGroup className="filterButtons">
					<Col sm={12}>
					<Button bsStyle="primary" onClick={this.filterData.bind(this)}>Filter Results</Button>
					<Button bsStyle="danger" onClick={this.toggleFilter.bind(this)}>Close Filter</Button>
					</Col>
				</FormGroup>
			</Form>
			</div>
		)
	}
}

export default Filter;