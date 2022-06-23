// 账号登录的 配置文件
// 编写验证规则
export const rules = {
  name: [
    {
      required: true,
      message: "用户名是必传的",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是5~10个字母或数字",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码是必填的",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: "密码必须是5位以上的字母或数字",
      trigger: "blur"
    }
  ]
}
