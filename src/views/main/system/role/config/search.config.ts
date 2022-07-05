import { IForm } from "@/base-ui/form/types"

export const searchFormConfig: IForm = {
  labelWidth: "100px",

  colLayout: {
    xl: 8, // > 1920px
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名称",
      placeholder: "角色名称"
    },
    {
      field: "intro",
      type: "input",
      label: "权限介绍",
      placeholder: "请输权限"
    },

    {
      field: "createTime",
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
}
