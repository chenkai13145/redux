import axios from 'axios'

const serve=axios.create({
    baseURL:'http://jsonplaceholder.typicode.com',
    timeout:60000
})

export default serve