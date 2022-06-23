<template>
  <div class="login-account">
    <el-form label-width="68px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号：" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

// 账号登录
<script lang="ts">
import { ElForm } from "element-plus/lib/components"
import { defineComponent, reactive, ref } from "vue"
import { rules } from "../config/account-config"
import localCache from "@/utils/cache"

export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? ""
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      // console.log("真正开始登录")

      formRef.value?.validate((valid) => {
        // 验证通过
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache("name", account.name)
            localCache.setCache("password", account.password)
          } else {
            localCache.deleteCache("name")
            localCache.deleteCache("password")
          }

          // 2.开始进行登录
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
