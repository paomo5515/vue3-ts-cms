import { ILoginState } from "./login/types"
import { ISystemState } from "./main/system/types"
import { IDashboardState } from "./main/analysis/types"

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
  dashboard: IDashboardState
}

type IStoreType = IRootState & IRootWithModule

export { IRootState, IRootWithModule, IStoreType }
