<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>

    <!-- 登陆方式 -->
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <!--记住密码 -->
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <!-- 立即登录按钮 -->

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

// 登录面板
<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    // 默认是账号登录
    const currentTab = ref("account")

    const handleLoginClick = () => {
      // console.log("立即登录") // 点击登录 -> 子组件 account 登录方法
      if (currentTab.value === "account") {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        // console.log("phoneRef相关的 action")
        phoneRef.value?.phoneAction()
      }
    }
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick
    }
  }
})
</script>

<style lang="scss">
.login-panel {
  width: 320px;
  .custom-tabs-label {
    display: flex;
    align-items: center;
  }
  .title {
    text-align: center;
  }
  .account-control {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    padding: 4px 6px;
  }
  .login-btn {
    width: 100%;
    margin-top: 16px;
  }
}
</style>
