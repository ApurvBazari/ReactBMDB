'use strict'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import reducers from './reducers/index.js'
import {addFavourite} from './actions/addFavourite.js'
import {itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess, itemsFetchData} from './actions/fetchItems.js'

import MovieList from './components/pages/moviesList.js'
import Favourites from './components/pages/favourites.js'
import TvList from './components/pages/tvList.js'
import Main from './main.js'

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducers, middleware);

//store.dispatch(itemsFetchData('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}'));

const Routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={MovieList} />
				<Route path="/movies" component={MovieList} />
				<Route path="/tv" component={TvList} />
				<Route path="/favourites" component={Favourites} />
				{/*<Route path="/myaccount" component={} />*/}
			</Route>
		</Router>
	</Provider>
)

render(Routes, document.getElementById('app'));

