// 封装 axios
import axios from "axios"
import { ElLoading } from "element-plus"
import type { AxiosInstance } from "axios"
import type { QCRequestInterceptors, QCRequestConfig } from "./type"
import { LoadingInstance } from "element-plus/es/components/loading/src/loading"

const DEFAULT_LOADING = true

class QCRequest {
  instance: AxiosInstance
  interceptors?: QCRequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean

  constructor(config: QCRequestConfig) {
    // 创建 axios 实例
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 使用拦截器
    // 1.从 config 取出对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 响应
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例的拦截器
    // 请求
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("所有的实例都有的拦截器：请求拦截成功")
        if (this.showLoading) {
          this.loading = ElLoading.service({
            target: "body",
            lock: true,
            // text: "正在加载...",
            background: "red"
          })
        }

        return config
      },
      (err) => {
        // console.log("所有的实例都有的拦截器：请求拦截失败")
        return err
      }
    )

    // 响应
    this.instance.interceptors.response.use(
      (res) => {
        // console.log("所有的实例都有的拦截器：响应成功拦截")

        // 关闭 loading
        this.loading?.close()

        return res.data
      },
      (err) => {
        // console.log("所有的实例都有的拦截器：响应失败拦截")
        return err
      }
    )
  }

  request<T>(config: QCRequestConfig<T>): Promise<T> {
    return new Promise((reslove, reject) => {
      // 1，单个请求 对请求 config 的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      //  判断是否需要 loading
      if (config.showLoading === false) {
        this.showLoading = false
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // console.log(res)

          // 每次请求完，将showloading 设置为 true，下次请求就会 有 loading
          this.showLoading = DEFAULT_LOADING
          // 3.将结果 resolve 出去
          reslove(res)
        })
        .catch((err) => {
          // 每次请求完，将showloading 设置为 true，下次请求就会 有 loading
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: QCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T>(config: QCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T>(config: QCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T>(config: QCRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default QCRequest
