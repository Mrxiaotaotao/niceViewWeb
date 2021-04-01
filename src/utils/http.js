import axios from 'axios'
const premission = window.localStorage.getItem("premission")

const http = axios.create({
    // 在config文件夹下dev.evn.js和prod.env.js里分别配置开发和生产环境对应的路径前缀
    // baseURL: '/api',
    baseURL: '/local',
    timeout: 35000, // request timeout
    withCredentials: true // 默认为false,true为携带cookie
})

http.CancelToken = axios.CancelToken // 挂载CancelToken用于取消请求

http.interceptors.request.use(
    (config) => {
        // 设置中文编码
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['authorization'] = localStorage.getItem('token') || ''
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)
// 返回拦截器
http.interceptors.response.use(
    (response) => {
        console.log(response, ';909909090');
        let code = response.data.code
        switch (code) {
            case 0:
                break;

            default:
                break;
        }
        return response
    },
    (error) => {
        window.location.href = premission == '1' || premission == '2' ? '/login' : '/'
        return Promise.reject(error)
    }
)

export default http