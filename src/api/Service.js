import axios from "axios";
import apiError from './apiError';
// 创建axios实例
const service = axios.create({
    // baseURL: 'http://192.168.0.144:85', // api 的 base_url
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        // Do something with request error
        Promise.reject(error);
    }
);

// response 拦截器
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        apiError(error);
        return Promise.reject(error);
    }
);

export default service;
