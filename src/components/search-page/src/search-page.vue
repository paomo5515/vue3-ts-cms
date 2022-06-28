<template>
  <div class="search">
    <QCForm v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="search-btn">
          <el-button class="reset">
            <el-icon><Refresh /> </el-icon>
            重置
          </el-button>
          <el-button class="search-data">
            <el-icon><Search /></el-icon>
            搜索
          </el-button>
        </div>
      </template>
    </QCForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import QCForm from "@/base-ui/form"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    QCForm
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sport: "",
      createTime: ""
    })
    return { formData }
  }
})
</script>

<style scoped lang="scss">
.search-btn {
  text-align: right;

  padding: 0 40px 24px 0;
  .reset {
    background-color: rgba(240, 128, 128, 0.6);
  }
  .search-data {
    background-color: rgba(127, 255, 212, 0.5);
  }
}
</style>
