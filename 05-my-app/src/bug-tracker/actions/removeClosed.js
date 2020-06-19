function removeClosed(bugs) {
    const openBugs = bugs.filter(bug => !bug.isClosed);
    const action = { type: 'REPLACE_BUGS', payload: openBugs };
    return action;
}

export default removeClosed;