<script lang="ts" setup>
import { ref, defineProps, watch } from "vue"
import { useStore } from "vuex"
import QCForm from "@/base-ui/form"

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  }
})

const dialogVisible = ref(false)
const formData = ref<any>({})

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)

// 点击确定按钮的逻辑
const store = useStore()
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    store.dispatch("system/editPageDataAction", {
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultInfo.id
    })
  } else {
    // 新建
    store.dispatch("system/createPageDataAction", {
      pageName: props.pageName,
      newData: { ...formData.value }
    })
  }
}
</script>

<template>
  <!-- 新建按钮 提示框 -->
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <QCForm v-bind="modalConfig" v-model="formData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<style scoped></style>
