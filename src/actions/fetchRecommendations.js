'use strict'

import fetch from 'isomorphic-fetch'

export const recommendationHasErrored = (bool) => dispatch => {
    return dispatch({
        type: 'RECOMMENDATION_HAS_ERRORED',
        hasErrored: bool
    });
}

export const recommendationIsLoading = (bool) => dispatch => {
    return dispatch({
        type: 'RECOMMENDATION_IS_LOADING',
        isLoading: bool
    });
}

export const recommendationFetchSuccess = (recommendations) => dispatch => {
    return dispatch({
        type: 'RECOMMENDATION_FETCH_SUCCESS',
        recommendations: recommendations
    });
}

export const fetchRecommendation = (url) => dispatch => {
        dispatch(recommendationIsLoading(true));
        return fetch(url)
            .then((response) => {
                dispatch(recommendationIsLoading(false));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((recommendations) => dispatch(recommendationFetchSuccess(recommendations)))
            .catch(() => dispatch(recommendationHasErrored(true)))
}