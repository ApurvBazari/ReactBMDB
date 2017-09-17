'use strict'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers/index.js'
import {addFavourite} from './actions/addFavourite.js'
import {itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess, itemsFetchData} from './actions/fetchItems.js'

import MovieList from './components/pages/moviesList.js'

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

render(
	<Provider store={store}>
		<MovieList />
	</Provider>,
	document.getElementById('app')
);

store.dispatch(itemsFetchData('https://api.themoviedb.org/3/movie/popular?api_key=d115fba9257637e7caf1dbc7a75a11d6&language=en-US&page=${1}'));