'use strict'

import React from 'react'
import {Switch, Route} from 'react-router-dom'

import MovieList from './components/pages/moviesList.js'
import Favourites from './components/pages/favourites.js'
import TvList from './components/pages/tvList.js'
import Profile from './components/pages/profilePage.js'
import SearchResults from './components/pages/searchList.js'

class Main extends React.Component {
	render() {
	return (
	<main>
		<Switch>
			<Route path="/movies" component={MovieList} />
			<Route path="/tvseries" component={TvList} />
			<Route path="/watchlist" component={Favourites} />
			<Route path="/:type/details/id=:valueId" component={Profile} />
			<Route path="/:type/search/searchTerm=:value" component={SearchResults} />
		</Switch>
	</main>
	)
}
}

export default Main;