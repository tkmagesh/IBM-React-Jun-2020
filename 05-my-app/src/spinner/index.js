import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from './actions';
import {
    Redirect
} from "react-router-dom";

/* class Spinner extends React.Component {
    state = {
        delta: 0,
        gotoBugs : false
    };
    onDecrementClick = () => {
        this.props.decrement(this.state.delta);
    }
    onIncrementClick = () => {
        this.props.increment(this.state.delta);
    }
    onGoToBugsClick = () => {
        this.setState({ gotoBugs: true });
    }
    render = () => {
        const value = this.props.value;
        if (this.state.gotoBugs){
            return (
                <Redirect to="/bugs" />
            );
        }
        return (
            <div>
                <h3>Spinner</h3>
                <hr />
                <label htmlFor="">Delta : </label>
                <input type="number" onChange={evt => this.setState({ delta: evt.target.valueAsNumber })} />
                <br />
                <input type="button" value="Decrement" onClick={this.onDecrementClick} />
                <span> [ {value} ] </span>
                <input type="button" value="Increment" onClick={this.onIncrementClick} />
                <br/>
                <input type="button" value="GO TO BUGS" onClick={this.onGoToBugsClick} />
            </div>
        )
    }
} */

const Spinner = ({value, increment, decrement}) => {
    const [delta, setDelta] = useState(0);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('Spinner is mounted with counter = ', counter);
        return () => {
            console.log('Spinner is unmounted');
        }
    },[counter]);
    const onIncrementClick = () => {
        increment(delta);
        setCounter(counter + 1);
    }
    return (
        <div>
            <h3>Spinner</h3>
            <hr />
            <label htmlFor="">Delta : </label>
            <input type="number" value={delta} onChange={evt => setDelta(evt.target.valueAsNumber)} />
            <br />
            <input type="button" value="Decrement" onClick={() => decrement(delta)} />
            <span> [ {value} ] </span>
            <input type="button" value="Increment" onClick={onIncrementClick} />
        </div>
    )
}

//extracting data from the storeState
function mapStateToProps(storeState){
    const spinnerValue = storeState.spinnerData;
    return { value : spinnerValue };
}

//creating action dispatchers using the store.dispatch
function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}


export default connect(mapStateToProps, mapDispatchToProps)(Spinner);