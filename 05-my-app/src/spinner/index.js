import React from 'react';

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

export default Spinner;