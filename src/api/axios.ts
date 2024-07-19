import axios, {AxiosInstance, InternalAxiosRequestConfig} from "axios";
import {showMessage} from "./status.ts";
import {ElMessage} from "element-plus";

const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    withCredentials: true,
    timeout: 10000
})

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        // config.headers['Content-Type']= 'application/x-www-form-urlencoded'
        config.headers['Token'] = "token"
        return config
    },
    (error: any) => {
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const {response} = error
        if (response) {
            showMessage(response.status)
            return Promise.reject(response.data)
        } else {
            ElMessage.error("网络异常,请稍后再试 !")
        }
    }
)
export default service;
