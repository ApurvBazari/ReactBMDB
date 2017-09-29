'use strict'

import fetch from 'isomorphic-fetch'

export const videosHasErrored = (bool) => dispatch => {
    return dispatch({
        type: 'VIDEOS_HAS_ERRORED',
        hasErrored: bool
    });
}

export const videosIsLoading = (bool) => dispatch => {
    return dispatch({
        type: 'VIDEOS_IS_LOADING',
        isLoading: bool
    });
}

export const videosFetchSuccess = (videos) => dispatch => {
    return dispatch({
        type: 'VIDEOS_FETCH_SUCCESS',
        videos: videos
    });
}

export const fetchVideos = (url) => dispatch => {
        dispatch(videosIsLoading(true));
        return fetch(url)
            .then((response) => {
                dispatch(videosIsLoading(false));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((videos) => dispatch(videosFetchSuccess(videos)))
            .catch(() => dispatch(videosHasErrored(true)))
}