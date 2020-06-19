import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//import * as calculator from './calculator'
//import { add } from './calculator';

//importing the default exported object
//import calculator from './calculator';

import appStore from './store';
import BugTracker from './bug-tracker'

import bugActionCreators from './bug-tracker/actions';

const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);


/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

function renderBugTracker() {
  const bugs = appStore.getState();
  ReactDOM.render(
    <BugTracker bugs={bugs} {...bugActionDispatchers} />,
    document.getElementById('root'));
}
renderBugTracker();
appStore.subscribe(renderBugTracker);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
