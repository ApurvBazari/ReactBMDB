'use strict'

import fetch from 'isomorphic-fetch'

export const creditsHasErrored = (bool) => dispatch => {
    return dispatch({
        type: 'CREDITS_HAS_ERRORED',
        hasErrored: bool
    });
}

export const creditsIsLoading = (bool) => dispatch => {
    return dispatch({
        type: 'CREDITS_IS_LOADING',
        isLoading: bool
    });
}

export const creditsFetchDataSuccess = (credits) => dispatch => {
    return dispatch({
        type: 'CREDITS_FETCH_DATA_SUCCESS',
        credits: credits
    });
}

export const creditsFetchData = (url) => dispatch => {
        dispatch(creditsIsLoading(true));
        return fetch(url)
            .then((response) => {
                dispatch(creditsIsLoading(false));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((credits) => dispatch(creditsFetchDataSuccess(credits)))
            .catch(() => dispatch(creditsHasErrored(true)))
}