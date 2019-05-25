import axios from 'axios';

export default  axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 04338d5f87c65f3b70ba21ac6d7e4d695889f95c2f616054a420cb4a2b9c6ca8'
    }
});

