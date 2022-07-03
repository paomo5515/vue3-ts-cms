import { Module } from "vuex"
import { IRootState } from "../../types"
import { ISystemState } from "./types"
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from "@/service/main/system/system"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, userList: any) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, list: any) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, list: any) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 2.获取 pageUrl
      const pageName = payload.pageName

      const pageUrl = `/${pageName}/list`

      // 2.对页面发送网络请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // console.log(pageResult, "--------")
      // 3.将数据存储到 state中
      const { list, totalCount } = pageResult.data

      const chnagePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${chnagePageName}List`, list)
      commit(`change${chnagePageName}Count`, totalCount)
    },

    // 删除数据
    async deletePageDataAction({ dispatch }, payload: any) {
      // 1.获取 pageName 和 id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      console.log(pageUrl)

      // 2.调用删除的 网络请求
      await deletePageData(pageUrl)

      // 3.重新请求 最新的网络数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 新建的 数据
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)

      // 新建完成之后 重新请求数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 编辑数据
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      // 编辑完成之后 重新请求数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
