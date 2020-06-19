const spinnerActionCreators = {
    decrement(delta) {
        const action = { type: 'DECREMENT', payload: delta };
        return action;
    },
    increment(delta) {
        const action = { type: 'INCREMENT', payload: delta };
        return action;
    }
}

export default spinnerActionCreators;