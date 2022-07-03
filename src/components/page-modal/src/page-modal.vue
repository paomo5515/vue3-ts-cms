<template>
  <!-- 新建按钮 提示框 -->

  <el-dialog
    v-model="dialogVisible"
    title="新建用户"
    width="30%"
    center
    destroy-on-close
  >
    <QCForm v-bind="modalConfig" v-model="formData" />
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from "vue"
import { useStore } from "vuex"
import QCForm from "@/base-ui/form"

export default defineComponent({
  components: {
    QCForm
  },
  props: {
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
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
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
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
