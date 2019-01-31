import { CHANGE_SEARCH_VALUE, REQUEST_ITEMS_PENDING, REQUEST_ITEMS_SUCCESS, REQUEST_ITEMS_FAILED } from './constants';

export const setSearchValue = (text) => ({
    type: CHANGE_SEARCH_VALUE,
    payload: text
})

export const requestItems = () => (dispatch) => {
    dispatch({type: REQUEST_ITEMS_PENDING});
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => { return response.json() })
    .then(data => dispatch({type: REQUEST_ITEMS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ITEMS_FAILED, payload: error}));
}
