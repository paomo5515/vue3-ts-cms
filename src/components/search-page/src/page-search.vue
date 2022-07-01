<template>
  <div class="search">
    <QCForm v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="search-btn">
          <el-button class="reset" @click="handleResetClick">
            <el-icon><Refresh /> </el-icon>
            重置
          </el-button>
          <el-button class="search-data" @click="handleQuery">
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
  // 发出 搜索时间
  emits: ["resetBtnClick", "queryBtnClick"],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的 field 来决定
    const formItems = props.searchFormConfig.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }
    const formData = ref(formOriginData)

    // 2.当用户点击 重置按钮
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit("resetBtnClick")
    }

    // 3.用户点击搜索
    const handleQuery = () => {
      // console.log("serarch")
      emit("queryBtnClick", formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQuery
    }
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
