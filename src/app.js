'use strict'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch, IndexRoute, browserHistory} from 'react-router-dom'

import reducers from './reducers/index.js'
import {addFavourite} from './actions/addFavourite.js'
import {itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess, itemsFetchData} from './actions/fetchItems.js'

import Home from './home.js'

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducers, middleware);

const Routes = (
	<Provider store={store}>
		<BrowserRouter history={browserHistory}>
			<Home />
		</BrowserRouter>
	</Provider>
)

render(Routes, document.getElementById('app'));

