import axios from 'axios'


const privateAxiosRequest = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})