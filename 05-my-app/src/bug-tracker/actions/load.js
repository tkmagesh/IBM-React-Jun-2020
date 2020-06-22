import axios from 'axios';
import bugApi from '../services/bugApi';

/* 
    axios.get('http://localhost:3030/bugs')
        .then(response => response.data)
        .then(bugs => ....)
*/
/* function getLocalBugs(){
    return [
        {
            "id": 1,
            "name": "Bug - 1",
            "isClosed": false,
            "createdAt": "2020-06-17T11:36:45.521Z"
        },
        {
            "id": 2,
            "name": "Bug - 2",
            "isClosed": false,
            "createdAt": "2020-06-17T11:36:54.589Z"
        },
        {
            "id": 3,
            "name": "Bug - 3",
            "isClosed": false,
            "createdAt": "2020-06-17T11:37:03.961Z"
        }
    ];
}

function getRemoteBugs(){
    return axios
        .get('http://localhost:3030/bugs')
        .then(response => response.data)       
} */

//using the asyncMiddleware
 function load(){
    return function(dispatch){
        /* const p = getRemoteBugs();
        p.then(function(bugs){
            const action = { type: 'INIT_BUGS', payload: bugs };
            dispatch(action);
        }); */

        bugApi
            .getAll()
            .then(bugs => {
                const action = { type: 'INIT_BUGS', payload: bugs };
                dispatch(action);
            });
    }
} 

//using the promiseMiddleware
/* function load(){
    return getRemoteBugs()
        .then(bugs => {
            const action = { type : 'INIT_BUGS', payload: bugs };
            return action;
        })
} */

export default load;