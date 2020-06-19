import { createStore, combineReducers } from 'redux';

import bugsReducer from '../bug-tracker/reducers/bugsReducer';
import spinnerReducer from '../spinner/reducers/spinnerReducer';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer
});

/* storeState = { 
    bugsData : [] //bugsReducer,
    spinnerData : 0 //spinnerReducer
} */

//const appStore = createStore(bugsReducer);
//const appStore = createStore(spinnerReducer);

const appStore = createStore(rootReducer);

export default appStore;