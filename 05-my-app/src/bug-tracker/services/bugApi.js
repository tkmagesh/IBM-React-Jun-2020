import axios from 'axios';
const serviceEndpoint = 'http://localhost:3030/bugs';

async function getAll(){
    var response = await axios.get(serviceEndpoint);
    return response.data;

    /* var p = axios.get(serviceEndpoint);
    var p2 = p.then(response => response.data);
    return p2; */
}

function getById(id){
    return axios.get(`${serviceEndpoint}/${id}`)
        .then(response => response.data);
}

function save(bugData){
    if (bugData.id === 0){
        return axios.post(serviceEndpoint, bugData)
            .then(response => response.data);
    } else {
        return axios.put(`${serviceEndpoint}/${bugData.id}`, bugData)
            .then(response => response.data);
    }
}

function remove(bugData){
    return axios.delete(`${serviceEndpoint}/${bugData.id}`)
        .then(response => response.data);
}

export default { getAll, getById, save, remove };
