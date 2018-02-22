// import * as actionTypes from './ActionTypes';

export default function addUser (state=[], action) {
    switch (action.type) {
        case 'CREATE_ITEM':
            return [
                ...state,
                action.payload
            ];
        case 'DELETE_ITEM':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}