import axios from 'axios';


export default axios.create({
    baseURL: 'http://tangra.cs.yale.edu:3000/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
