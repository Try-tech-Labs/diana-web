import axios from 'axios'

import baseUrls from '../constants/index';

const BASE_URL = baseUrls[process.env.NODE_ENV][process.env['REACT_APP_ENVIRONMENT']]
const AUTH_TOKEN = process.env['REACT_APP_AUTHORIZATION_TOKEN']

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getPostList = () => {
    return axios({
        method: 'get',
        url: '/posts',
    })
    .then(function (response) {
        return response.data
    });
}