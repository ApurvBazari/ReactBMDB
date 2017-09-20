'use strict'

import React from 'react'
import {Form, FormGroup, Col, FormControl, Button} from 'react-bootstrap'

class Filter extends React.Component{
	toggleFilter = () => {
		this.props.toggleFilter();
	}

	filterData = () => {
		console.log('Filter Data');
	}

	render() {
		return (
			<Form>
				<FormGroup>
					<Col sm={2}>
						Genre type
					</Col>
					<Col sm={10}>
						<FormControl type="checkbox" value="Check" />
					</Col>
				</FormGroup>
				<Button onClick={this.filterData.bind(this)}>Filter Results</Button>
				<Button onClick={this.toggleFilter.bind(this)}>Close Filter</Button>
			</Form>
		)
	}
}

export default Filter;