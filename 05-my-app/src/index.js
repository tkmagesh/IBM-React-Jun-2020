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

import Spinner from './spinner';
import BugTracker from './bug-tracker'

import spinnerActionCreators from './spinner/actions';
import bugActionCreators from './bug-tracker/actions';


const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);
const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderSpinner() {

    const storeState = appStore.getState(),
          spinnerValue = storeState.spinnerData,
          bugs = storeState.bugsData;

    ReactDOM.render(
      <div>
        <Spinner value={spinnerValue} {...spinnerActionDispatchers}/>
        <BugTracker bugs={bugs} {...bugActionDispatchers} />
      </div>
    , document.getElementById('root'));
}
renderSpinner();
appStore.subscribe(renderSpinner);

/* 

 function renderBugTracker() {
  const bugs = appStore.getState();
  ReactDOM.render(
    <BugTracker bugs={bugs} {...bugActionDispatchers} />,
    document.getElementById('root'));
}
renderBugTracker();
appStore.subscribe(renderBugTracker); 
*/




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
