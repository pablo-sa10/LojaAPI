import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000', // URL do back-end
});

export default api;