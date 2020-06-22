import remove from './remove';

function removeClosed(bugs) {
    return function(dispatch){
        const closedBugs = bugs.filter(bug => bug.isClosed);
        const closedBugsRemoveReqs = closedBugs.map(closedBug => remove(closedBug));
        Promise
            .all(closedBugsRemoveReqs)
            .then(() => {
                closedBugs.forEach(closedBug => {
                    const action = { type : 'REMOVE_BUG', payload : closedBug };
                    dispatch(action);
                })
            });
    }
}

export default removeClosed;