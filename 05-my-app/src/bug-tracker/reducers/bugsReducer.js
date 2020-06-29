const initialState = {
    bugs : [], 
    sortAttr : '', 
    isDesc : false
}
function bugsReducer(currentState = initialState, action) {
    if (action.type === 'ADD_NEW_BUG') {
        const newState = {...currentState, bugs : [...currentState.bugs, action.payload]};
        return newState;
    }
    if (action.type === 'REMOVE_BUG') {
        const bugToRemove = action.payload,
            newState = { ...currentState, bugs : currentState.bugs.filter(bug => bug.id !== bugToRemove.id) };
        return newState;
    }
    if (action.type === 'UPDATE_BUG') {
        const updatedBug = action.payload,
            newState = { ...currentState, bugs : currentState.bugs.map(bug => bug.id === updatedBug.id ? updatedBug : bug)};
        return newState;
    }
    if (action.type === 'REPLACE_BUGS' || action.type === 'INIT_BUGS') {
        return { ...currentState, bugs : action.payload } ;
    }
    
    if (action.type === 'SORT_BUGS'){
        const newState = { ...currentState, ...action.payload};
        return newState;
    }
    return currentState;
}
export default bugsReducer;