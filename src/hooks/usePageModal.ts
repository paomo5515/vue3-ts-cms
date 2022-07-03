import { ref } from "vue"
import PageModal from "@/components/page-modal"

type CallbackFn = (item?: any) => void

export function usePageModal(newFn?: CallbackFn, editFn?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  // 处理创建数据
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newFn && newFn()
  }

  // 处理编辑数据
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editFn && editFn(item)
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
