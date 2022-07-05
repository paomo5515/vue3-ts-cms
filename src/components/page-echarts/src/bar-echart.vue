<script setup lang="ts">
import { defineProps, computed, withDefaults } from "vue"
import * as echarts from "echarts"
import QCEchart from "@/base-ui/echart"

const props = withDefaults(
  defineProps<{
    xLabels: string[]
    values: any[]
  }>(),
  {}
)

const options = computed(() => {
  return {
    backgroundColor: "rgba(240, 128, 128, 0.2)",
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        // 文本在 柱子 里边
        inside: true,

        color: "#fff"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#999"
      }
    },
    dataZoom: [
      {
        type: "inside"
      }
    ],
    series: [
      {
        // For shadow
        type: "bar",
        itemStyle: {
          color: "rgba(0,0,0,0.1)"
        },
        barGap: "-100%",
        barCategoryGap: "40%",
        data: props.xLabels,
        animation: false
      },
      {
        type: "bar",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: props.values
      }
    ]
  }
})
</script>

// 柱状图-商品收藏
<template>
  <div class="bar-echart">
    <QCEchart :options="options" />
  </div>
</template>

<style scoped></style>
