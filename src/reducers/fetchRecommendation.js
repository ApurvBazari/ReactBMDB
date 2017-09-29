export const recommendationHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'RECOMMENDATION_HAS_ERRORED':
            return Object.assign({}, state, action.hasErrored);
        default:
            return state;
    }
}

export const recommendationIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'RECOMMENDATION_IS_LOADING':
            return Object.assign({}, state, action.isLoading);
        default:
            return state;
    }
}

export const recommendationFetchSuccess = (state = [], action) => {
    switch (action.type) {
        case 'RECOMMENDATION_FETCH_SUCCESS':
            return Object.assign({}, state, action.recommendations);
        default:
            return state;
    }
}