import { CHANGE_SEARCH_VALUE, REQUEST_ITEMS_PENDING, REQUEST_ITEMS_SUCCESS, REQUEST_ITEMS_FAILED } from './constants';

const initialStateSearch = {
    searchValue: ''
}

export const searchItems = (state=initialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_VALUE:
            return {...state, searchValue: action.payload};
        default:
            return state;
    }
}

const initialStateItems = {
    isPending: false,
    items: [],
    error: ''
}

export const requestItems = (state=initialStateItems, action={}) => {
    switch(action.type){
        case REQUEST_ITEMS_PENDING:
            return {...state, isPending: true};
        case REQUEST_ITEMS_SUCCESS:
            return {...state, items: action.payload, isPending: false};
        case REQUEST_ITEMS_FAILED:
            return {...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}
