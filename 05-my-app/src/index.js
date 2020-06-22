import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import appStore from './store';

import Spinner from './spinner';
import BugTracker from './bug-tracker'

//rendering the connected component

const Home = () => (
  <p>Consectetur irure tempor elit dolore cupidatat deserunt nisi duis irure eu cupidatat sunt officia deserunt. Elit cupidatat officia sint cillum occaecat adipisicing in consequat eu. Sunt labore incididunt in deserunt anim amet. Laboris eu dolore elit minim magna labore consectetur dolor. Quis qui minim ut incididunt commodo velit veniam. Nostrud aute nulla est adipisicing exercitation exercitation cillum ut veniam nulla. In amet mollit qui adipisicing laborum aute magna cillum minim nulla.</p>
);

ReactDOM.render(
  <Provider store={appStore}>
    <div>
      <h1>My App</h1>
      <Router>
        <div>
            <span>
              [ <Link to="/">Home</Link> ]
            </span>
            <span>
              [ <Link to="/spinner">Spinner</Link> ]
            </span>
            <span>
              [ <Link to="/bugs">Bugs</Link> ]
            </span>

          <Switch>
            <Route path="/spinner">
              <Spinner />
            </Route>
            <Route path="/bugs">
              <BugTracker />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>
  , document.getElementById('root'));

/* 
import spinnerActionCreators from './spinner/actions';
import bugActionCreators from './bug-tracker/actions';

//creating action dispatchers using the store.dispatch
const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);
const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderSpinner() {

  //extracting data from the storeState
    const storeState = appStore.getState(),
          spinnerValue = storeState.spinnerData,
          bugs = storeState.bugsData;

    //rendering the component
    ReactDOM.render(
      <div>
        <Spinner value={spinnerValue} {...spinnerActionDispatchers}/>
        <BugTracker bugs={bugs} {...bugActionDispatchers} />
      </div>
    , document.getElementById('root'));
}
renderSpinner();
appStore.subscribe(renderSpinner);
 */

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
