import qcRequset from ".."
import { IAccount, ILoginResulte } from "./type"
import { IDataType } from "../types"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // 用法：users/1
  UserMenus = "/role/" // 用法：role/1/menu
}

// 登录请求
export function accountLoginRequest(account: IAccount) {
  return qcRequset.post<IDataType<ILoginResulte>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 请求用户信息
export function requestUserInfoById(id: number) {
  return qcRequset.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

// 请求用户权限 对应的菜单
export function requestUserMenusByRoleId(id: number) {
  return qcRequset.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  })
}
