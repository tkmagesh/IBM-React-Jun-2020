import { createStore, combineReducers, applyMiddleware } from 'redux';

import bugsReducer from '../bug-tracker/reducers/bugsReducer';
import spinnerReducer from '../spinner/reducers/spinnerReducer';
import loggerMiddleware from './middlewares/loggerMiddleware';
import asyncMiddleware from './middlewares/asyncMiddleware';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer
});

const appStore = createStore(rootReducer, 
    applyMiddleware(loggerMiddleware, asyncMiddleware));

export default appStore;