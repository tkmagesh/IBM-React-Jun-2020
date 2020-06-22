function bugsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW_BUG') {
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'REMOVE_BUG') {
        const bugToRemove = action.payload,
            newState = currentState.filter(bug => bug.id !== bugToRemove.id);
        return newState;
    }
    if (action.type === 'UPDATE_BUG') {
        const updatedBug = action.payload,
            newState = currentState.map(bug => bug.id === updatedBug.id ? updatedBug : bug);
        return newState;
    }
    if (action.type === 'REPLACE_BUGS') {
        return action.payload;
    }
    if (action.type === 'INIT_BUGS'){
        return action.payload;
    }
    return currentState;
}
export default bugsReducer;