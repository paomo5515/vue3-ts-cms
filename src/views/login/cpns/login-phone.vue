<template>
  <div class="login-phone">
    <el-form label-width="68px">
      <el-form-item label="手机号：" prop="phoneNumber">
        <el-input v-model="phone.phoneNumber" />
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

// 手机登录
<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const phone = reactive({
      phoneNumber: "",
      code: ""
    })

    const phoneAction = () => {
      // console.log("phoneNum登录")
    }

    return {
      phone,
      phoneAction
    }
  }
})
</script>

<style scoped lang="scss">
.get-code {
  display: flex;
}
.get-code-btn {
  margin-left: 10px;
}
</style>
