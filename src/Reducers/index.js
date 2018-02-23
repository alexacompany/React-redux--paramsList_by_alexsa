import { combineReducers } from 'redux';

import user from './usersObj';
import addUser from './addUser';
import submitInfo from './submitInfo';
import modalItem from './modalItem';


export default combineReducers({
    user,
    addUser,
    submitInfo,
    modalItem,
})