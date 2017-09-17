'use strict'

export const addFavourite = (state={}, action) => {
	switch(action.type) {
		case 'ADD_FAVOURITE':
			return {
				favourites:[...state, ...action.payload]
			}
	}
	return state
}