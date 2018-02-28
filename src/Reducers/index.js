import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import menu from './api';
import createItems from './createItems';

export default combineReducers({
    menu,
    createItems,
    form: formReducer
})