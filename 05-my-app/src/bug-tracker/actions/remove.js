function remove(bug){
    const action = { type: 'REMOVE_BUG', payload: bug };
    return action;
}
export default remove;