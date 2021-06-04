//key 35955fb9187d1bdb85b7b7bc4da3efd0c89215f2
//base URL https://api-ssl.bitly.com/v4/
import axios from 'axios';

export const key = '35955fb9187d1bdb85b7b7bc4da3efd0c89215f2';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    }
})

export default api;