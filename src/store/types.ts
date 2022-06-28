import { ILoginState } from "./login/types"
import { ISystemState } from "./main/system/types"

interface IRootState {
  name: string
  age: number
}

interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

type IStoreType = IRootState & IRootWithModule

export { IRootState, IRootWithModule, IStoreType }
