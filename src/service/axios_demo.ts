import axios from "axios"

// axios 的实例
axios
  .get("http://123.207.32.32:8000/home/multidata")
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })

// axios 的配置选项
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 5000

axios
  .get("/get", {
    params: {
      name: "hello",
      age: 18
    },
    // 单独配置
    timeout: 5000
  })
  .then((res) => {
    console.log(res)
  })

// axios.all 多个请求，一起返回
axios
  .all([
    axios.get("/get", { params: { name: "get" } }),
    axios.post("/post", { params: { name: "post" } })
  ])
  .then((res) => {
    console.log(res)
  })

// axios 的拦截器
// fn1：表示请求发送成功，会执行的函数
// fn1：表示请求发送失败，会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 1.给请求添加 token
    // 2.添加 loading 动画

    console.log("请求成功的拦截")
    return config
  },
  (err) => {
    console.log("请求发生错误")
    return err
  }
)

// fn1：数据响应成功（服务器正常返回了数据）
axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截")
    return res
  },
  (err) => {
    console.log("服务器响应失败")
    return err
  }
)
