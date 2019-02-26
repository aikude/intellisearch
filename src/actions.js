import { CHANGE_SEARCH_VALUE, REQUEST_ITEMS_PENDING, REQUEST_ITEMS_SUCCESS, REQUEST_ITEMS_FAILED } from './constants';

// Dispatch value of search field to state
export const setSearchValue = (event) => ({
    type: CHANGE_SEARCH_VALUE,
    payload: event.target.value
});

// Fetch list of items from remote API and dispatch to state
export const requestItems = () => (dispatch) => {
    dispatch({type: REQUEST_ITEMS_PENDING});
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json() )
    .then(data => dispatch({type: REQUEST_ITEMS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ITEMS_FAILED, payload: error}));
};
