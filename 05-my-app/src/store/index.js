import { createStore } from 'redux';

import bugsReducer from '../bug-tracker/reducers/bugsReducer';

const appStore = createStore(bugsReducer);

export default appStore;