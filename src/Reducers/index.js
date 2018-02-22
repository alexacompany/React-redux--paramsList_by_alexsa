import { combineReducers } from 'redux';

import user from './usersObj';
import addUser from './addUser';
import submitInfo from './submitInfo';
// import mesage from './mesage';


export default combineReducers({
    user,
    addUser,
    submitInfo,
})