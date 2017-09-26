'use strcit'

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Grid, Row} from 'react-bootstrap'

import {itemsFetchData} from '../../actions/fetchItems.js'

import Card from '../component/card.js'

class SearchResults extends React.Component {
	componentWillMount = () => {
		console.log(this.props.match.params.value);
		let searchTerm = this.props.match.params.value;
		let type = this.props.match.params.type;
		let url = `https://api.themoviedb.org/3/search/${type}?api_key=d115fba9257637e7caf1dbc7a75a11d6&query=${searchTerm}&page=1`;
		this.props.itemsFetchData(url);
	}

	handleLike = (e) => {
		console.log('Liked');
	}

	render() {
		let list = [];
		this.props.data.forEach((profile, i) => {
			list.push(<Card data={profile} key={i} handleClick={this.handleLike.bind(this)}/>)			
		})
		return (
			<Grid>
				<Row>
					<div className="searchHeader">{this.props.match.params.type} results for term: {this.props.match.params.value}</div>
					<div className="searchList">{list}</div>
				</Row>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.items.results
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		itemsFetchData: bindActionCreators(itemsFetchData, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);