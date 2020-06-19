import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from './actions';

class Spinner extends React.Component {
    state = {
        delta: 0
    };
    onDecrementClick = () => {
        this.props.decrement(this.state.delta);
    }
    onIncrementClick = () => {
        this.props.increment(this.state.delta);
    }
    render = () => {
        const value = this.props.value;
        return (
            <div>
                <h1>Spinner</h1>
                <hr />
                <label htmlFor="">Delta : </label>
                <input type="number" onChange={evt => this.setState({ delta: evt.target.valueAsNumber })} />
                <br />
                <input type="button" value="Decrement" onClick={this.onDecrementClick} />
                <span> [ {value} ] </span>
                <input type="button" value="Increment" onClick={this.onIncrementClick} />
            </div>
        )
    }
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