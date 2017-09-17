'use strict'

export const addFavourite = (movie) => dispatch => {	
	return {
		type: 'ADD_FAVOURITE',
		payload: movie
	}
}