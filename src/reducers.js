import { CHANGE_SEARCH_VALUE } from './constants';

const initialState = {
    searchValue: ''
}

const searchItems = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_VALUE:
            return {...state, searchValue: action.payload};
        default:
            return state;
    }
}

export default searchItems;