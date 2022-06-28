<template>
  <div class="nav-header">
    <div class="fold" @click="handleFoldChange">
      <el-icon class="icon-fold">
        <template v-if="isFold === true"><Fold /> </template>
        <template v-else><Expand /> </template>
      </el-icon>
    </div>
    <!-- 面包屑 -->
    <div class="content">
      <div>
        <QCBreadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  </div>
</template>

// 首页头部
<script setup lang="ts">
import { defineEmits, computed } from "vue"
import { ref } from "vue"
import { useStore } from "@/store"
import { useRoute } from "vue-router"
// import UserInfo from "./user-info.vue"
import { QCBreadcrumb } from "@/base-ui/breadcrumb"
import { pathMapBreadcrumbs } from "@/utils/map-menus"

const isFold = ref(false)

const emit = defineEmits(["foldChange"])
// const props = defineProps({})
const handleFoldChange = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}

// 面包屑数据 [{name:,path:}]
const store = useStore()
const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const route = useRoute().path
  return pathMapBreadcrumbs(userMenus, route)
})
</script>

<style scoped lang="scss">
.nav-header {
  width: 100%;
  display: flex;
  .fold {
    display: flex;
    align-items: center;
    .icon-fold {
      font-size: 30px;
      cursor: pointer;
    }
  }

  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
