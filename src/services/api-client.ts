import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'595965b05ae34600b177f728365ee3fd'
    }
})