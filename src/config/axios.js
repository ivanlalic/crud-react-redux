import axios from 'axios';

const clientAxios = axios.create({
    //baseURL: 'http://localhost:4000/'    
    baseURL: 'https://my-json-server.typicode.com/ivanlalic/crud-react-redux-db'

})

export default clientAxios;