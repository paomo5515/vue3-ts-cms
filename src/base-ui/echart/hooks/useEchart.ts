import * as echarts from "echarts"
export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el, "macarons")

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener("resize", () => {
    echartInstance.resize()
  })

  return { echartInstance, setOptions, updateSize }
}
