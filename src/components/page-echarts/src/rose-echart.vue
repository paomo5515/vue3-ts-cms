<script setup lang="ts">
import { computed, defineProps } from "vue"
import QCEchart from "@/base-ui/echart"
import { IDataType } from "../types"

const props = defineProps<{
  roseData: IDataType[]
}>()

const options = computed(() => {
  return {
    backgroundColor: "rgba(240, 128, 128, 0.2)",
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "分类数据",
        type: "pie",
        radius: [20, 140],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 5
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<template>
  <div class="rose-echart">
    <QCEchart :options="options" />
  </div>
</template>

<style scoped></style>
