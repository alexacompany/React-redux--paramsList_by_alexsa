import { combineReducers } from 'redux';

import addUser from './addUser';
import mesage from './mesage';
import user from './usersObj';
import deleteItem from './deleteItem';

export default combineReducers({
    user,
    addUser,
    deleteItem,
    mesage,
})