'use strict'

import {combineReducers} from 'redux'

import {itemsFetchSuccess, itemsIsLoading, itemsHasErrored} from './fetchItems.js'
import {addFavourite} from './addFavourites.js'
import {creditsHasErrored, creditsIsLoading, creditsFetchSuccess} from './fetchCredits.js'
import {imagesHasErrored, imagesIsLoading, imagesFetchSuccess} from './fetchImages.js'
import {videosHasErrored, videosIsLoading, videosFetchSuccess} from './fetchVideos.js'

export default combineReducers({
	items: itemsFetchSuccess,
	itemsIsLoading,
	itemsHasErrored,
	favourites: addFavourite,
	credits: creditsFetchSuccess,
	creditsIsLoading,
	creditsHasErrored,
	images: imagesFetchSuccess,
	imagesIsLoading,
	imagesHasErrored,
	videos: videosFetchSuccess,
	videosIsLoading,
	videosHasErrored
});
