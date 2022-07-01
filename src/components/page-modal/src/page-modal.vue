<template>
  <!-- 新建按钮 提示框 -->
  <div class="page-modal">
    <el-button text @click="centerDialogVisible = true">
      Click to open the Dialog
    </el-button>

    <el-dialog
      v-model="centerDialogVisible"
      title="新建用户"
      width="30%"
      center
    >
      <QCForm v-bind="modalConfig" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue"
import QCForm from "@/base-ui/form"
const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  }
})

// 新建弹框
const centerDialogVisible = ref(false)
</script>

<style scoped></style>
