import { Module } from "vuex"
import { mapMenusToRoutes, mapMenusToPermissions } from "@/utils/map-menus"
import { ILoginState } from "./types"
import { IRootState } from "../types"
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import { IAccount } from "@/service/login/type"
import localCache from "@/utils/cache"
import router from "@/router"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    // 在 vuex 中存储 token
    changeToken(state, token: string) {
      state.token = token
    },
    // 在 vuex 中存储 用户信息
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    // 在 vuex 中存储 用户对应 的菜单
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // userMenus 映射 -> routes
      const routes = mapMenusToRoutes(userMenus)

      // 将 routes 添加到 router -> main -> children
      routes.forEach((route) => {
        router.addRoute("main", route)
      })

      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      // console.log("permissions", permissions)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      localCache.setCache("token", token)

      // 发送初始化的请求（完整的 role/department）
      dispatch("getInitalDataAction", null, { root: true })

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      localCache.setCache("userMenus", userMenus)

      // 4.跳转首页
      router.push("/main")
    },

    // phoneLoginAction({ commit }, payload: any) {
    //   console.log("执行了phoneLoginAction")
    // },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
        // 发送初始化的请求（完整的 role/department）
        dispatch("getInitalDataAction", null, { root: true })
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}

export default loginModule
