import bugApi from '../services/bugApi';

function remove(bug){
    return bugApi
        .remove(bug)
        .then(() => {
            const action = { type: 'REMOVE_BUG', payload: bug };
            return action;
        });
}
export default remove;