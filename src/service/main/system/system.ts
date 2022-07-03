import qcRequset from "@/service"
import { IDataType } from "../../types"

export function getPageListData(url: string, queryInfo: any) {
  return qcRequset.post<IDataType>({
    url,
    data: queryInfo
  })
}

// url：/users/id
export function deletePageData(url: string) {
  return qcRequset.delete<IDataType>({
    url
  })
}

// 创建数据的 请求
export function createPageData(url: string, newData: any) {
  return qcRequset.post<IDataType>({
    url,
    data: newData
  })
}

// 编辑
export function editPageData(url: string, editData: any) {
  return qcRequset.patch<IDataType>({
    url,
    data: editData
  })
}
