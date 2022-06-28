import { createApp } from "vue"
import { registerApp } from "./global"
// 全局引入
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"

// 测试 axios
// import "./service/axios_demo"
// import qcRequset from "./service"
import router from "./router"
import store from "./store"
import "normalize.css"
import "./assets/css/index.scss"
import App from "./App.vue"
import { setupStore } from "./store"

const app = createApp(App)

registerApp(app)
// 等价于
// app.use(registerApp)

app.use(store)
setupStore()
app.use(router)
// app.use(ElementPlus)

// 38-1.10.51
app.mount("#app")

// qcRequset.request({
//   url: "/home/multidata",
//   method: "GET",
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("单独请求的config")
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log("单独拦截的response")
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// qcRequset
//   .get<DataType>({
//     url: "/home/multidata"
//     // method: "GET"
//     // showLoading: false
//   })
//   .then((res) => {
//     console.log("main-", res)
//   })
