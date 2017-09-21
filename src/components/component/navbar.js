'use strict'

import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'

class Navbar extends React.Component{
	componentWillMount = () => {
		this.setState({
			activeKey: 1
		})
	}

	handleSelect = (selectedKey) => {
		this.props.handleSelect(selectedKey);
		this.setState({
			activeKey: selectedKey
		});
	}

	render(){
		return(
			<Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
				<NavItem eventKey={1}>Popular</NavItem>
				<NavItem eventKey={3}>Top Rated</NavItem>
				<NavItem eventKey={4}>Now Playing</NavItem>
				<NavItem eventKey={5}>Upcoming</NavItem>
			</Nav>
		)
	}
}

export default Navbar;