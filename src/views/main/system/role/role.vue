<script lang="ts" setup>
import { computed, ref, nextTick } from "vue"
import { useStore } from "@/store"
import PageCount from "@/components/page-content"
import SearchPage from "@/components/search-page"
import PageModal from "@/components/page-modal"
import { contentTableConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
import { modalConfig } from "./config/modal.config"
import { usePageModal } from "@/hooks/usePageModal"
import { mapMenuLeafKeys } from "@/utils/map-menus"
import { ElTree } from "element-plus"

// 处理 pageModal 的hook
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  // console.log(item)
  const leafKeys = mapMenuLeafKeys(item.menuList)
  nextTick(() => {
    // console.log(elTreeRef.value)
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  undefined,
  editCallback
)

const store = useStore()
const menus = computed(() => store.state.entirMenu)

const otherInfo = ref({})
const handleChangeCheck = (data1: any, data2: any) => {
  // console.log("data1", data1)
  // console.log("data2", data2)
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>

<template>
  <div class="role">
    <SearchPage :searchFormConfig="searchFormConfig" />

    <PageCount
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @handleNewClick="handleNewData"
      @handleEditClick="handleEditData"
    />
    <PageModal
      ref="pageModalRef"
      pageName="role"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <!-- 创建角色的权限 -->
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleChangeCheck"
        ></el-tree>
      </div>
    </PageModal>
  </div>
</template>

<style scoped lang="scss">
.menu-tree {
  margin-left: 24px;
}
</style>
