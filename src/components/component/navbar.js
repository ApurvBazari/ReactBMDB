'use strict'

import React from 'react'
import {Nav, NavItem, Navbar} from 'react-bootstrap'

class Navigationbar extends React.Component{
	componentWillMount = () => {
		this.setState({
			activeKey: 1,
			isSearch: false,
			searchTerm: ''
		});
	}

	handleSelect = (selectedKey) => {
		this.props.handleSelect(selectedKey);
		this.setState({
			activeKey: selectedKey
		});
	}

	toggleSearch = () => {
		this.setState({
			isSearch: !this.state.isSearch
		})
	}

	handleSearch = (e) => {
		e.preventDefault();
		console.log(this.state.searchTerm);
	}

	handleInput = (e) => {
		this.setState({
			searchTerm: e.target.value 
		});
	}

	render(){
		let search;
		if (this.state.isSearch) {
			search = (
				<div>
					<input type="text" placeholder="Search.." onChange={this.handleInput.bind(this)}/>
					<i className="glyphicon glyphicon-ok" onClick={this.handleSearch.bind(this)}></i>
					<i className="glyphicon glyphicon-remove" onClick={this.toggleSearch.bind(this)}></i>
				</div>
			);
		} else {
			search = (<i className="glyphicon glyphicon-search" onClick={this.toggleSearch.bind(this)}></i>);
		}
		return(
			<Navbar fluid>
			<Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
				<NavItem eventKey={1}>Popular</NavItem>
				<NavItem eventKey={3}>Top Rated</NavItem>
				<NavItem eventKey={4}>Now Playing</NavItem>
				<NavItem eventKey={5}>Upcoming</NavItem>
			</Nav>
			<Nav pullRight>
				<NavItem>{search}</NavItem>
			</Nav>
			</Navbar>
		)
	}
}

export default Navigationbar;