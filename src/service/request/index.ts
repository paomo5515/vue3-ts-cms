// 封装 axios
import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"
import type { QCRequestInterceptors, QCRequestConfig } from "./type"

class QCRequest {
  instance: AxiosInstance
  interceptors?: QCRequestInterceptors

  constructor(config: QCRequestConfig) {
    // 每次创建 用 inisance 保存
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 请求
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 响应
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default QCRequest
