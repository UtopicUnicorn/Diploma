import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.3.9:3000'
})

export default instance
