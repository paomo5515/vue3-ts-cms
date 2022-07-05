<script setup lang="ts">
import { defineProps, computed, withDefaults } from "vue"
import QCEchart from "@/base-ui/echart"

const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    values: any[]
  }>(),
  {
    title: ""
  }
)

const options = computed(() => {
  return {
    backgroundColor: "rgba(240, 128, 128, 0.2)",
    title: {
      text: props.title
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },

    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.xLabels
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: props.values,
        type: "line",
        areaStyle: {}
      }
    ]
  }
})
</script>

// 分类商品向量
<template>
  <div class="line-echart">
    <QCEchart :options="options" />
  </div>
</template>

<style scoped></style>
