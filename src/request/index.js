import store from '../store'
/* eslint-disable no-undef */
axios.defaults.retry = 2
axios.defaults.retryDelay = 1000
const baseURL = ''
// eslint-disable-next-line
const service = axios.create({
  baseURL,
  timeout: 10000
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 定义全局使用参数
  config.headers.authtoken = store.getters.header || ''
  config.headers['Content-type'] = 'application/json; charset=UTF-8'
  return config
}, error => {
  console.error(error)
  return Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

/**
 * `GET`请求
 * @param {string} url 接口地址
 * @param {object} params 传参数据
 * @returns {Promise<any>}
 */
export const getRequest = (url, params) => service.get(url, { params })
/**
 * `POST`请求
 * @param {string} url 接口地址
 * @param {object} params 传参数据
 * @returns {Promise<any>}
 */
export const postRequest = (url, params) => service.post(url, Object.assign({}, params))
/**
 * `PUT`请求
 * @param {string} url 接口地址
 * @param {object} params 传参数据
 * @returns {Promise<any>}
 */
export const putRequest = (url, params) => service.put(url, params)
/**
 * `DELETE`请求
 * @param {string} url 接口地址
 * @param {object} params 传参数据
 * @returns {Promise<any>}
 */
export const deleteRequest = (url, params) => service.delete(url, { params })
/**
 * `POST`文件请求
 * @param {string} url 接口地址
 * @param {object} params 传参数据
 * @returns {Promise<any>}
 */
export const postFileRequest = (url, params) => service.post(url, params, { headers: { 'content-type': 'multipart/form-data' } })
