'use strict'

import React from 'react'
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap'

class Header extends React.Component{
	render() {
		return (
			<Navbar inverse fluid>
    			<Navbar.Header>
      				<Navbar.Brand>
        				<a href="/">BMDB</a>
      				</Navbar.Brand>
      			<Navbar.Toggle />
    			</Navbar.Header>
    			<Navbar.Collapse>
      				<Nav>
        				<NavItem eventKey={2} href="/movies">Movies</NavItem>
        				<NavItem eventKey={1} href="/tvseries">Tv Series</NavItem>
      				</Nav>
      				<Nav pullRight>
        				<NavItem eventKey={1} href="/watchlist">My Watchlist</NavItem>
        				<NavItem eventKey={2} href="/myaccount">My Account</NavItem>
      				</Nav>
    			</Navbar.Collapse>
  			</Navbar>
		)
	}
}

export default Header;