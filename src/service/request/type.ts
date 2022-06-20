import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface QCRequestInterceptors {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  // 响应拦截
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface QCRequestConfig extends AxiosRequestConfig {
  interceptors: QCRequestInterceptors
}
