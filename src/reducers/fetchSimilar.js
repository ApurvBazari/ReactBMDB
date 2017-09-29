export const similarHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'SIMILAR_HAS_ERRORED':
            return Object.assign({}, state, action.hasErrored);
        default:
            return state;
    }
}

export const similarIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'SIMILAR_IS_LOADING':
            return Object.assign({}, state, action.isLoading);
        default:
            return state;
    }
}

export const similarFetchSuccess = (state = [], action) => {
    switch (action.type) {
        case 'SIMILAR_FETCH_SUCCESS':
            return Object.assign({}, state, action.similar);
        default:
            return state;
    }
}