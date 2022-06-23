let BASE_URL = ""
const TIME_OUT = 10000
if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "httl://hello.org/pro"
} else {
  BASE_URL = "httl://hello.org/test"
}

export { BASE_URL, TIME_OUT }
