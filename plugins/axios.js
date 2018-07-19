import axios from 'axios'


export default axios.create({
    baseURL: process.env.baseUrl,
    headers: {
        'Content-Type': "application/json;charset=UTF-8",
        // for now this is static, should be replaced with some value from the store after login action
        'Authorization': "Bearer"
    }
})