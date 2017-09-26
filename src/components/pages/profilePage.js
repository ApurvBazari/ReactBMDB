'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {itemsFetchData} from '../../actions/fetchItems.js'

class Profile extends React.Component{
	componentWillMount = () => {
		console.log(this.props.match.params.value);
		let id = this.props.match.params.valueId;
		let type = this.props.match.params.type;
		let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US`;
		this.props.fetchProfile(url);
	}

	render () {
		console.log(this);
		return (
			<div>
				<h1>Profile Details for {this.props.data.id}</h1>
			</div>
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