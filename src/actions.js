import { CHANGE_SEARCH_VALUE } from './constants';

export const setSearchValue = (text) => ({
    type: CHANGE_SEARCH_VALUE,
    payload: text
})