import { ILoginState } from "./login/types"
import { ISystemState } from "./main/system/types"

// 根状态
interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entirMenu: any[]
}

// 模块状态
interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

type IStoreType = IRootState & IRootWithModule

export { IRootState, IRootWithModule, IStoreType }
