<template>
  <div>
    <h2>{{ $store.state.name }}</h2>
    <hr />
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
}
</style>
