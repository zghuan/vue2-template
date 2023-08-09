import { getRequest, postRequest } from '../request'
/**
 * 获取系统信息
 * @param {{ url: string }} params
 */
export const saasInfo = params => getRequest('/user/saasInfo', params)

/**
 * 查询所有用户和密码
 */
export const getAlluser = params => getRequest('/user/alluser', params)

/**
 * 登录
 */
export const userLogin = params => postRequest('/user/login', params)

/**
 * 换语言
 */
export const changeLang = params => postRequest('/user/setLang', params)

/**
 * 换肤色
 */
export const changeTheme = params => postRequest('/user/setSkip', params)
