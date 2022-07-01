export const contentTableConfig = {
  title: "用户列表",
  // 是否展示 列 序号
  showIndexColumn: true,
  // 是否可以选择
  showSelectColumn: true,
  propList: [
    { prop: "name", label: "用户名", minWidth: "100" },
    { prop: "realname", label: "真实姓名", minWidth: "100" },
    { prop: "cellphone", label: "手机号码", minWidth: "150" },
    { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "100",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "100",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "100", slotName: "handler" }
  ]
}
