// 方式一：手动切换
// 开发
// const BASE_URL = "httl://hello.org/dev"

// 生产
// const BASE_URL = "httl://hello.org/pro"

// 测试
// const BASE_URL = "httl://hello.org/test"

// 方式二：根据 process.env.NODE_ENV
// 开发环境：development
// 生产环境：production
// 测试环境：test

export let BASE_URL = ""
if (process.env.NODE_ENV === "development") {
  console.log("-------development")
  BASE_URL = "httl://hello.org/dev"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "httl://hello.org/pro"
} else {
  BASE_URL = "httl://hello.org/test"
}

// 方式三：创建 .env文件
// VUE_APP_BASE_URL = "httl://hello.org/dev"
// .env.development

// .env.paoduction
