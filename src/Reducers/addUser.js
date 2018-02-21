// import * as actionTypes from './ActionTypes';

export default function addUser (state=[], action) {
    switch (action.type) {
        case 'CREATE_ITEM':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}