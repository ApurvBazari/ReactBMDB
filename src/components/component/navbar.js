'use strict'

import React from 'react'
import {Nav, NavItem, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
					<Link to={`/${this.props.type}/search/searchTerm=${this.state.searchTerm}`}>
						<i className="glyphicon glyphicon-ok"></i>
					</Link>
					<i className="glyphicon glyphicon-remove" onClick={this.toggleSearch.bind(this)}></i>
				</div>
			);
		} else {
			search = (<i className="glyphicon glyphicon-search" onClick={this.toggleSearch.bind(this)}></i>);
		}
		return(
			<Navbar fluid>
			<Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
				<NavItem className="navItem" eventKey={1}>Popular</NavItem>
				<NavItem className="navItem" eventKey={3}>Top Rated</NavItem>
				<NavItem className="navItem" eventKey={4}>Now Playing</NavItem>
				<NavItem className="navItem" eventKey={5}>Upcoming</NavItem>
			</Nav>
			<Nav pullRight>
				<NavItem>{search}</NavItem>
			</Nav>
			</Navbar>
		)
	}
}

export default Navigationbar;