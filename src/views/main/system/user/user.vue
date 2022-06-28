<template>
  <div class="user">
    <SearchPage :searchFormConfig="searchFormConfig" />
    <div class="content">
      <QCTable :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? "启用" : "禁用" }}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
      </QCTable>
    </div>
  </div>
</template>

// 用户管理
<script lang="ts" setup>
import { computed } from "vue"
import { useStore } from "@/store"
import SearchPage from "@/components/search-page"
import { searchFormConfig } from "./config/search.config"
import QCTable from "@/base-ui/table"

const store = useStore()
store.dispatch("system/getPageListAction", {
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const userList = computed(() => store.state.system.userList)
const userCount = computed(() => store.state.system.userCount)
const propList = [
  { prop: "name", label: "用户名", minWidth: "100" },
  { prop: "realname", label: "真实姓名", minWidth: "100" },
  { prop: "cellphone", label: "手机号码", minWidth: "150" },
  { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
  {
    prop: "createAt",
    label: "创建时间",
    minWidth: "100",
    slotName: "createAt"
  },
  { prop: "updateAt", label: "更新时间", minWidth: "100", slotName: "updateAt" }
]
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
  /* border-top: 20px sandybrown solid; */
}
</style>
