<template>
  <div class="nav-header">
    <div @click="handleFoldChange">
      <el-icon class="icon-fold">
        <template v-if="isFold === true"><Fold /> </template>
        <template v-else><Expand /> </template>
      </el-icon>
    </div>
  </div>
</template>

// 首页头部
<script setup lang="ts">
import { defineEmits } from "vue"
import { ref } from "vue"
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
  .icon-fold {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
