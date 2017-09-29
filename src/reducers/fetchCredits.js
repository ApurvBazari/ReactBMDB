export const creditsHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'CREDITS_HAS_ERRORED':
            return Object.assign({}, state, action.hasErrored);
        default:
            return state;
    }
}

export const creditsIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'CREDITS_IS_LOADING':
            return Object.assign({}, state, action.isLoading);
        default:
            return state;
    }
}

export const creditsFetchSuccess = (state = [], action) => {
    switch (action.type) {
        case 'CREDITS_FETCH_DATA_SUCCESS':
            return Object.assign({}, state, action.credits);
        default:
            return state;
    }
}