import request from '../utils/request';
/**
 * 登录接口
 */
export const login = (data) => {
  return request({
    url: "/login/",
    method: "POST",
    data
  })
}