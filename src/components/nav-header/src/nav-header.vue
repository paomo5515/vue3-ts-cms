<template>
  <div class="nav-header">
    <div class="fold" @click="handleFoldChange">
      <el-icon class="icon-fold">
        <template v-if="isFold === true"><Fold /> </template>
        <template v-else><Expand /> </template>
      </el-icon>
    </div>
    <!-- 面包屑 -->
    <div class="content">
      <div>面包屑</div>
      <div>
        <UserInfo />
      </div>
    </div>
  </div>
</template>

// 首页头部
<script setup lang="ts">
import { defineEmits } from "vue"
import { ref } from "vue"
import UserInfo from "./user-info.vue"

const isFold = ref(false)

const emit = defineEmits(["foldChange"])
// const props = defineProps({})
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}
</script>

<style scoped lang="scss">
.nav-header {
  width: 100%;
  display: flex;
  .fold {
    display: flex;
    align-items: center;
    .icon-fold {
      font-size: 30px;
      cursor: pointer;
    }
  }

  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
