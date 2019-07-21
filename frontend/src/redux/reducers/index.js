import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import User from './user';
import Product from './product';
import Order from './order';
import Company from './company';
import Ui from './ui';

const rootReducer = combineReducers({
    User,
    Product,
    Order,
    Company,
    Ui,
    form: formReducer
});

export default rootReducer;