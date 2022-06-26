type IFormType = "input" | "password" | "select" | "datepicker"

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any
  // 针对其它类型
  otherOptions?: any
}

export interface IForm {
  formItems?: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
