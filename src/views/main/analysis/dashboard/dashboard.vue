<script lang="ts" setup>
import { computed } from "vue"
import { useStore } from "@/store"
import QCCard from "@/base-ui/card"

import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart
} from "@/components/page-echarts"

const store = useStore()
store.dispatch("dashboard/getDashboardDataAction")

// 饼图数据
const categoryGoodsCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item: any) => {
    return { name: item.name, value: item.goodsCount }
  })
})

// 商品分类数据
const categoryGoodsSale = computed(() => {
  const xLabels: string[] = []
  const values: any = []

  const categoryGoodsSaleResult = store.state.dashboard.categoryGoodsSale
  for (const item of categoryGoodsSaleResult) {
    xLabels.push(item.name)
    values.push(item.goodsCount)
  }

  return { xLabels, values }
})

// 商品收藏数据
const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any = []

  const categoryGoodsFavorResult = store.state.dashboard.categoryGoodsFavor
  for (const item of categoryGoodsFavorResult) {
    xLabels.push(item.name)
    values.push(item.goodsFavor)
  }

  return { xLabels, values }
})
</script>

// 饼图
<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="7">
        <QCCard name="header" title="分类商品数量（饼图）">
          <PieEchart :pieData="categoryGoodsCount" />
        </QCCard>
      </el-col>
      <el-col :span="10">
        <QCCard name="header" title="不同城市商品销量"> </QCCard>
      </el-col>
      <el-col :span="7">
        <QCCard name="header" title="分类商品数量（玫瑰图）">
          <RoseEchart :roseData="categoryGoodsCount" />
        </QCCard>
      </el-col>
    </el-row>

    <el-row :gutter="12" class="content-row">
      <el-col :span="12">
        <QCCard name="header" title="分类商品的销量">
          <LineEchart v-bind="categoryGoodsSale" />
        </QCCard>
      </el-col>
      <el-col :span="12">
        <QCCard name="header" title="分类商品的收藏">
          <BarEchart v-bind="categoryGoodsFavor" />
        </QCCard>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.my-echarts {
  width: 600px;
  height: 600px;
}
.dashboard {
  padding-top: 20px;
  .content-row {
    margin-top: 20px;
  }
}
</style>
