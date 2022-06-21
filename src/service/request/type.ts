import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface QCRequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  // 响应拦截
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface QCRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: QCRequestInterceptors<T>
  showLoading?: boolean
}
