// service 统一出口
import QCRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const qcRequset = new QCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 请求 拦截
    requestInterceptor: (config) => {
      // 携带 token 拦截
      const token = ""
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
      }

      console.log("请求成功的拦截")
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败的拦截")
      return err
    },

    // 响应 拦截
    responseInterceptor: (res) => {
      console.log("响应成功的拦截")
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log("响应失败的拦截")
      return err
    }
  }
})

export default qcRequset
