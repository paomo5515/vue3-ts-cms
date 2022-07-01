export const contentTableConfig = {
  title: "菜单列表",
  // 是否展示 列 序号
  showIndexColumn: false,
  // 是否可以选择
  showSelectColumn: false,
  childrenProps: {
    rowKey: "id",
    treeProps: {
      children: "children"
    }
  },
  showFooter: false,
  propList: [
    { prop: "name", label: "菜单名称", minWidth: "100" },
    { prop: "type", label: "类型", minWidth: "60" },
    { prop: "url", label: "菜单url", minWidth: "150" },
    { prop: "permission", label: "按钮权限", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "220",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "220",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "100", slotName: "handler" }
  ]
}
