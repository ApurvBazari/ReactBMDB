'use strict'

import {combineReducers} from 'redux'

import {itemsFetchSuccess, itemsIsLoading, itemsHasErrored} from './fetchItems.js'
import {addFavourite} from './addFavourites.js'

export default combineReducers({
	items: itemsFetchSuccess,
	itemsIsLoading,
	itemsHasErrored,
	favourites: addFavourite
});
