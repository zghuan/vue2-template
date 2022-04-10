import { getRequest } from '../request'
/**
 * 获取系统信息
 * @param {{ url: string }} params
 */
export const saasInfo = params => getRequest('/api/user/saasInfo', params)
