import qcRequset from "@/service"
import { IDataType } from "../../types"

export function getPageListData(url: string, queryInfo: any) {
  return qcRequset.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
