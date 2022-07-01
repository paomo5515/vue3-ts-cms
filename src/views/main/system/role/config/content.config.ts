export const contentTableConfig = {
  title: "角色列表",
  // 是否展示 列 序号
  showIndexColumn: true,
  // 是否可以选择
  showSelectColumn: true,
  propList: [
    { prop: "name", label: "角色名", minWidth: "100" },
    { prop: "intro", label: "权限介绍", minWidth: "150" },
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
