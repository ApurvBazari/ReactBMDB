export const videosHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'IMAGES_HAS_ERRORED':
            return Object.assign({}, state, action.hasErrored);
        default:
            return state;
    }
}

export const videosIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'IMAGES_IS_LOADING':
            return Object.assign({}, state, action.isLoading);
        default:
            return state;
    }
}

export const videosFetchSuccess = (state = [], action) => {
    switch (action.type) {
        case 'IMAGES_FETCH_SUCCESS':
            return Object.assign({}, state, action.videos);
        default:
            return state;
    }
}