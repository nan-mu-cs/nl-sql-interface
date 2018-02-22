import axios from 'axios';


export default axios.create({
    baseURL: 'https://localhost:1080/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});;
