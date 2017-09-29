'use strict'

import fetch from 'isomorphic-fetch'

export const itemsHasErrored = (bool) => dispatch => {
    return dispatch({
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    });
}

export const itemsIsLoading = (bool) => dispatch => {
    return dispatch({
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    });
}

export const itemsFetchDataSuccess = (items) => dispatch => {
    return dispatch({
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    });
}

export const itemsFetchData = (url) => dispatch => {
        dispatch(itemsIsLoading(true))
        return fetch(url)
            .then((response) => {
                dispatch(itemsIsLoading(false))
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)))
}