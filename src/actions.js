import { CHANGE_SEARCH_VALUE, REQUEST_ITEMS_PENDING, REQUEST_ITEMS_SUCCESS, REQUEST_ITEMS_FAILED, 
    CREATE_ALERTS, CLEAR_ALERTS } from './constants';

export const clearAlerts = () => {
    return { type: CLEAR_ALERTS, payload: [] };
}

export const createAlert = (message, alertType) => {
    let theme;
    switch(alertType) {
        case 'success':
            theme = 'bg-light-green b--green';
            break;
        case 'danger':
            theme = 'bg-light-red b--red';
            break;
        default:
            theme = 'bg-light-yellow b--gold';
    }
    return { type: CREATE_ALERTS, payload: [{id: 'custom-alert', msg: message, className:`tc ba br2 ${theme} f4 pa3 ma3`}] };
}

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
    .catch(error => {
        dispatch({type: REQUEST_ITEMS_FAILED, payload: error});
        dispatch(createAlert('Unable to fetch items.'));
    });
};

