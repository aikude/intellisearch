import { CHANGE_SEARCH_VALUE, REQUEST_ITEMS_PENDING, REQUEST_ITEMS_SUCCESS, REQUEST_ITEMS_FAILED, 
    CREATE_ALERTS, CLEAR_ALERTS } from './constants';

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

const initialStateAlerts = {
    alerts: []
}

export const alerts = (state = initialStateAlerts, action) => {
    switch(action.type) {
        case CREATE_ALERTS:
            //return { ...state, alerts: [...state.alerts, ...action.payload] }
            return { ...state, alerts: action.payload }
        case CLEAR_ALERTS:
            return { ...state, alerts: [] }
        default:
            return state;
    }
}