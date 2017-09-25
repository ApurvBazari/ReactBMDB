'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {itemsFetchData} from '../../actions/fetchItems.js'

class Profile extends React.Component{
	componentWillMount = () => {

	}

	render () {
		return (
			<h1>Profile Details</h1>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProfile: bindActionCreators(itemsFetchData, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);