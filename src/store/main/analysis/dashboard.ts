// 分析 图表的请求
import { Module } from "vuex"
import { IDashboardState } from "./types"
import { IRootState } from "../../types"
import * as dashboardService from "@/service/main/analysis/dashboard"

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      // 商品总数
      categoryGoodsCount: [],

      // 商品销量
      categoryGoodsSale: [],

      // 商品收藏
      categoryGoodsFavor: [],

      // 不同城市的 商品销量
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      // 商品总数
      const categoryCount = await dashboardService.getCategoryGoodsCount()
      commit("changeCategoryGoodsCount", categoryCount.data)

      const categorySale = await dashboardService.getCategoryGoodsSale()
      commit("changeCategoryGoodsSale", categorySale.data)

      const categoryFavor = await dashboardService.getCategoryGoodsFavor()
      commit("changeCategoryGoodsFavor", categoryFavor.data)

      const addressSale = await dashboardService.getAdressGoodsSale()
      commit("changeAddressGoodsSale", addressSale.data)
    }
  }
}

export default dashboardModule
