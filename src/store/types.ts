import { ILoginState } from "./login/types"

interface IRootState {
  name: string
  age: number
}

interface IRootWithModule {
  login: ILoginState
}

type IStoreType = IRootState & IRootWithModule

export { IRootState, IRootWithModule, IStoreType }
