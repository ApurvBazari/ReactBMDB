'use strict'

import fetch from 'isomorphic-fetch'

export const similarHasErrored = (bool) => dispatch => {
    return dispatch({
        type: 'SIMILAR_HAS_ERRORED',
        hasErrored: bool
    });
}

export const similarIsLoading = (bool) => dispatch => {
    return dispatch({
        type: 'SIMILAR_IS_LOADING',
        isLoading: bool
    });
}

export const similarFetchSuccess = (similar) => dispatch => {
    return dispatch({
        type: 'SIMILAR_FETCH_SUCCESS',
        similar: similar
    });
}

export const fetchSimilar = (url) => dispatch => {
        dispatch(similarIsLoading(true));
        return fetch(url)
            .then((response) => {
                dispatch(similarIsLoading(false));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((similar) => dispatch(similarFetchSuccess(similar)))
            .catch(() => dispatch(similarHasErrored(true)))
}