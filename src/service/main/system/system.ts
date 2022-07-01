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
