import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.css';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

import bugActionCreators from './actions';

const BugTracker = ({ bugs, addNew, remove, toggle, removeClosed }) => (
    <div>
        <h1>Bug Tracker</h1>
        <hr />
        <BugStats bugs={bugs} />
        <BugSort />
        <BugEdit addNew={addNew} />
        <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </div>
);

//extracting data from the storeState
function mapStateToProps(storeState) {
    const { spinnerData, bugsData } = storeState;
    const bugs = bugsData.filter(bug => bug.id % 2 === spinnerData % 2);
    return { bugs: bugs };
}

//creating action dispatchers using the store.dispatch
function mapDispatchToProps(dispatch) {
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);
