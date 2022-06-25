<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside class="aside" :width="isCollapse ? '50px' : '200px'">
        <NavMenu :isCollapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-container">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

// 首页
<script lang="ts" setup>
import { ref } from "vue"
// import NavHeader from "@/components/nav-header"
// import NavMenu from "@/components/nav-menu"

// menu是否折叠
const isCollapse = ref(false)
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style scoped lang="scss">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .main-container {
    display: flex;
    height: 100%;
  }
  .aside {
    height: 100%;
  }
  .page {
    height: 100%;
  }
  .page-container {
    height: calc(100% - 48px);
    text-align: center;

    color: red;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
  background-color: rgba(173, 216, 230, 0.6);
}
</style>
