<template>
  <div class="login">
    <login-panel />
  </div>
</template>

// 登陆组件
<script lang="ts">
import { defineComponent } from "vue"
import LoginPanel from "./cpns/login-panel.vue"

export default defineComponent({
  components: {
    LoginPanel
  }
})
</script>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
</style>
