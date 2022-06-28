<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">Vue3+Ts</span>

      <div class="nav-menu-list">
        <el-menu
          class="el-menu-vertical"
          background-color="lemonchiffon"
          text-color="#333"
          active-text-color="lightcoral"
          :default-active="defaultValue"
          :isCollapse="isCollapse"
        >
          <template v-for="item in userMenus" :key="item.id">
            <!-- 二级菜单 -->
            <template v-if="item.type === 1">
              <!-- 二级菜单可以展开得标题 -->
              <el-sub-menu :index="item.id + ''">
                <template #title>
                  <el-icon><Menu /></el-icon>
                  <span>{{ item.name }}1</span>
                </template>

                <!-- 遍历里面的 item 标题里面的内容 -->
                <template v-for="subitem in item.children" :key="subitem.id">
                  <el-menu-item
                    :index="subitem.id + ''"
                    @click="handleMenuRouter(subitem)"
                  >
                    <span>{{ subitem.name }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>

            <!-- 一级菜单 -->
            <template v-else-if="item.type === 2">
              <el-menu-item :index="item.id + ''">
                <!-- 有值时使用 icon -->
                <span>{{ item.name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>

// 首页菜单
<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import { useStore } from "@/store"
import { useRouter, useRoute } from "vue-router"
import { pathMapToMenu } from "@/utils/map-menus"
// interface Props {
//   isCollapse: boolean
// }
export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  // // vuex -> pinia
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path

    // data
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + "")

    // 处理菜单路由
    const handleMenuRouter = (item: any) => {
      router.push({
        path: item.url ?? "./not-found"
      })
    }
    return {
      userMenus,
      defaultValue,
      handleMenuRouter
    }
  }
})

// const props = withDefaults(defineProps<Props>(), {
//   isCollapse: false
// })
</script>

<style scoped lang="scss">
.nav-menu {
  width: 200px;
  /* overflow: hidden; */
  height: 100%;
  background-color: lemonchiffon;
  .logo {
    display: flex;
    flex-wrap: wrap;
    height: 28px;
    padding: 12px 0 0;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      padding: 0 16px 0 20px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: #000;
    }
    .nav-menu-list {
      width: 200px;
      .el-menu {
        border-right: none;
      }
      .el-menu-item.is-active {
        background-color: rgba(211, 211, 211, 0.6);
      }
    }
  }
}
</style>
