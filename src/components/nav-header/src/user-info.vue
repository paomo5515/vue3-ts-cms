<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <div class="avatar">
          <el-avatar
            :size="40"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
          <span>{{ name }}</span>
        </div>

        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">
            <el-icon><CircleCloseFilled /></el-icon>
            退出登录
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><User /></el-icon>
            用户信息
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><Tools /></el-icon>
            系统管理
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store"
import { useRouter } from "vue-router"
import LocalCache from "@/utils/cache"

const store = useStore()
const name = computed(() => store.state.login.userInfo.name)
const router = useRouter()
const handleExitClick = () => {
  LocalCache.deleteCache("token")
  router.push("/main")
}
</script>

<style scoped lang="scss">
.el-dropdown-link {
  display: flex;
  align-items: center;
  .avatar {
    display: flex;
    align-items: center;
    span {
      padding: 0 6px;
      color: lightcoral;
    }
  }
}
</style>
