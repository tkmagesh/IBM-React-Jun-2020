import axios from 'axios';

/* 
    axios.get('http://localhost:3030/bugs')
        .then(response => response.data)
        .then(bugs => ....)
*/
function getLocalBugs(){
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

function load(){
    //const bugs = getLocalBugs();
    const action = { type : 'INIT_BUGS', payload : bugs};
    return action;
}

export default load;