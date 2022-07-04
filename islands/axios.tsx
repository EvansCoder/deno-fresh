import axios from 'https://cdn.skypack.dev/axios';

const instance=axios.create({
    baseURL: 'http://messaging-app-backend-chi.vercel.app/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default instance