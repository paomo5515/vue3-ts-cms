import { createApp } from "vue"
import { registerApp } from "./global"
// 全局引入
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"

// 测试 axios
// import "./service/axios_demo"
import qcRequset from "./service"
import App from "./App.vue"
import router from "./router"
import store from "./store"

const app = createApp(App)

registerApp(app)
// 等价于
// app.use(registerApp)

app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount("#app")

qcRequset.request({
  url: "/home/multidata",
  method: "GET"
})
