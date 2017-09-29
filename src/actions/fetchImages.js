'use strict'

import fetch from 'isomorphic-fetch'

export const imagesHasErrored = (bool) => dispatch => {
    return dispatch({
        type: 'IMAGES_HAS_ERRORED',
        hasErrored: bool
    });
}

export const imagesIsLoading = (bool) => dispatch => {
    return dispatch({
        type: 'IMAGES_IS_LOADING',
        isLoading: bool
    });
}

export const imagesFetchSuccess = (images) => dispatch => {
    return dispatch({
        type: 'IMAGES_FETCH_SUCCESS',
        images: images
    });
}

export const fetchImages = (url) => dispatch => {
        dispatch(imagesIsLoading(true));
        return fetch(url)
            .then((response) => {
                dispatch(imagesIsLoading(false));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((images) => dispatch(imagesFetchSuccess(images)))
            .catch(() => dispatch(imagesHasErrored(true)))
}