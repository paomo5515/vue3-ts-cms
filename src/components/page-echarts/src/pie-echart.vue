<script setup lang="ts">
import { defineProps, computed } from "vue"
import QCEchart from "@/base-ui/echart"
import { IDataType } from "../types"

const props = defineProps<{
  pieData: IDataType[]
}>()

const options = computed(() => {
  return {
    backgroundColor: "rgba(240, 128, 128, 0.2)",
    tooltip: {
      trigger: "item"
    },
    legend: {
      left: "center"
    },
    series: [
      {
        name: "分类数据",
        type: "pie",
        radius: "50%",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  }
})
</script>

// 饼图
<template>
  <div class="pie-echart">
    <QCEchart :options="options" />
  </div>
</template>

<style scoped></style>
