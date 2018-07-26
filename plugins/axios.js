import axios from 'axios'


export default axios.create({
    baseURL: process.env.baseUrl,
    headers: {
        'Content-Type': "application/json;charset=UTF-8"
    }
})