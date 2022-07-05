<template>
  <div class="qc-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.qc-card {
  .box-card {
    .card-header {
      text-align: left;
      padding: 2px 0;
      font-weight: 600;
    }
  }
}
</style>
