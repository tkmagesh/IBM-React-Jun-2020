import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.css';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

import bugActionCreators from './actions';
import load from './actions/load';

/* const BugTracker = ({ bugs, addNew, remove, toggle, removeClosed, load }) => (
    <div>
        <h3>Bug Tracker</h3>
        <hr />
        <input type="button" value="LOAD BUGS" onClick={load} />
        <BugStats bugs={bugs} />
        <BugSort />
        <BugEdit addNew={addNew} />
        <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </div>
); */

/* class BugTracker extends React.Component{
    componentDidMount = () => {
        this.props.load();
    }
    componentWillUnmount = () => {

    }
    componentWillUpdate = () => {
        
    }
    render = () => {
        const { bugs, addNew, remove, toggle, removeClosed } = this.props;
        return (
            <div>
                <h3>Bug Tracker</h3>
                <hr />
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{ bugs, toggle, remove, removeClosed }} />
            </div>
        );
    }
} */

const BugTracker = ({ bugs, addNew, remove, toggle, removeClosed, load }) => {
    useEffect(()=> {
        load();
    },[]);
    return (
        <div>
            <h3>Bug Tracker</h3>
            <hr />
            <BugStats bugs={bugs} />
            <BugSort />
            <BugEdit addNew={addNew} />
            <BugList {...{ bugs, toggle, remove, removeClosed }} />
        </div>
    );
};


//extracting data from the storeState
function mapStateToProps(storeState) {
    /* const { spinnerData, bugsData } = storeState;
    const bugs = bugsData.filter(bug => bug.id % 2 === spinnerData % 2); */
    const bugs = storeState.bugsData;
    return { bugs: bugs };
}

//creating action dispatchers using the store.dispatch
function mapDispatchToProps(dispatch) {
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);
