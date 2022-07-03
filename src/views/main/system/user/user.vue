<template>
  <div class="user">
    <SearchPage
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="resetBtnClick"
      @queryBtnClick="queryBtnClick"
    />

    <PageCount
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @handleNewClick="handleNewData"
      @handleEditClick="handleEditData"
    />

    <!-- 新建按钮 提示框 -->
    <PageModal
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      pageName="users"
    />
  </div>
</template>

// 用户管理
<script lang="ts" setup>
import { computed } from "vue"
import { useStore } from "@/store"
import SearchPage from "@/components/search-page"
import PageCount from "@/components/page-content"
import PageModal from "@/components/page-modal"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"
import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"

const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()

// pageModal 相关的 hook 逻辑

// 处理密码框
const newwCallback = () => {
  const passwordItem = modalConfig.formItems!.find(
    (item) => item.field === "password"
  )
  passwordItem!.isHidden = false
}

const editCallback = () => {
  const passwordItem = modalConfig.formItems!.find(
    (item) => item.field === "password"
  )
  passwordItem!.isHidden = true
}
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  newwCallback,
  editCallback
)

// 动态添加部门和 角色列表
const store = useStore()
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems!.find(
    (item) => item.field === "departmentId"
  )
  departmentItem!.options = store.state.entireDepartment.map((item: any) => ({
    title: item.name,
    value: item.id
  }))

  const roleItem = modalConfig.formItems!.find(
    (item) => item.field === "roleId"
  )
  roleItem!.options = store.state.entireRole.map((item: any) => ({
    title: item.name,
    value: item.id
  }))
  return modalConfig
})
</script>

<style scoped lang="scss"></style>
