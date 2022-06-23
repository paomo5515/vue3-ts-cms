<template>
  <div class="login-account">
    <el-form label-width="68px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号：" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

// 账号登录
<script lang="ts">
import { ElForm } from "element-plus/lib/components"
import { defineComponent, reactive, ref } from "vue"
import { rules } from "../config/account-config"

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: ""
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      // console.log("真正开始登录")

      formRef.value?.validate((valid) => {
        if (valid) {
          // 真正开始登录
          console.log("")
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="scss"></style>
