export const itemsHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return Object.assign({}, state, action.hasErrored);
        default:
            return state;
    }
}

export const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return Object.assign({}, state, action.isLoading);
        default:
            return state;
    }
}

export const itemsFetchSuccess = (state = [], action) => {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return Object.assign({}, state, action.items);
        default:
            return state;
    }
}