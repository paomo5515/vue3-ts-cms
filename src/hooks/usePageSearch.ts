import { ref } from "vue"
import PageCount from "@/components/page-content"

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageCount>>()

  // 重置发送请求
  const resetBtnClick = () => {
    // console.log("resetBtnClick")
    pageContentRef.value?.getPageData()
  }

  // 搜索 发送请求
  const queryBtnClick = (queryInfo: any) => {
    // console.log("queryBtnClick", queryInfo)
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, resetBtnClick, queryBtnClick]
}
