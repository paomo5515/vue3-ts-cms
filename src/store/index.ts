import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IRootState, IStoreType } from "./types"
import login from "./login/login"
import system from "./main/system/system"
import { getPageListData } from "@/service/main/system/system"
import dashboard from "./main/analysis/dashboard"

const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entirMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entirMenu = list
    }
  },
  actions: {
    async getInitalDataAction({ commit }) {
      // 请求 部门数据和角色数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: department } = departmentResult.data
      // 配置别名
      const roleListResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })

      const { list: roleList } = roleListResult.data

      // 请求 新建角色的菜单
      const menuResult = await getPageListData("/menu/list", {})
      const { list: menuList } = menuResult.data

      // 保存数据
      commit("changeEntireDepartment", department)
      commit("changeEntireRole", roleList)
      commit("changeEntireMenu", menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
  // token 有可能没有获取到
  // store.dispatch("getInitalDataAction")
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
