<template>
  <div id="app">
    <h2>{{ $store.state.name }}</h2>
    <hr />
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>

    <el-button>哈哈哈</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary">Primary</el-button>
    <hr />
    <div class="slider-demo-block">
      <span class="demonstration">Default value</span>
      <el-slider />
    </div>

    <hr />
    <div>
      <el-icon>
        <Edit />
      </el-icon>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#app {
}
</style>
