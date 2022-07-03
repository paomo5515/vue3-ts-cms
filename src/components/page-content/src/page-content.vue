<template>
  <div class="page-content">
    <QCTable
      :listData="dataList"
      v-bind="contentTableConfig"
      :listCount="listCount"
      v-model:page="pageInfo"
    >
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button v-if="isCreate" type="primary" @click="handleNewClick"
          >新建用户</el-button
        >
      </template>

      <!-- 列中的插槽 -->
      <template #status="scope">
        <!-- 状态 -->
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <!-- 创建时间 -->
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #handler="scope">
        <div class="handler-btns">
          <el-button
            v-if="isUpdate"
            size="small"
            type="warning"
            link
            @click="handleEditClick(scope.row)"
          >
            <el-icon><EditPen /></el-icon>
            编辑
          </el-button>
          <el-button
            v-if="isDelete"
            size="small"
            type="danger"
            link
            @click="handleDeleteClick(scope.row)"
          >
            <el-icon><DeleteFilled /></el-icon>
            删除
          </el-button>
        </div>
      </template>

      <!-- 动态插入剩余 插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </QCTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"
import { useStore } from "@/store"
import QCTable from "@/base-ui/table"
import { usePermissions } from "@/hooks/usePermissions"

export default defineComponent({
  components: {
    QCTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ["handleNewClick", "handleEditClick"],
  setup(props, { emit }) {
    const store = useStore()

    // 0.获取操作的权限
    const isCreate = usePermissions(props.pageName, "create")
    const isUpdate = usePermissions(props.pageName, "update")
    const isDelete = usePermissions(props.pageName, "delete")
    const isQuery = usePermissions(props.pageName, "query")

    // 1.双向绑定 pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })

    // 监听 每页 多少条数据
    watch(pageInfo, () => getPageData())

    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    // 3.从 vuex 中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    const listCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    // 4.获取其它的动态插槽的名称
    const otherPropSlots = props.contentTableConfig.propList.filter(
      (item: any) => {
        if (item.slotName === "status") return false
        if (item.slotName === "createAt") return false
        if (item.slotName === "updateAt") return false
        if (item.slotName === "handler") return false
        return true
      }
    )

    // 5.删除/编辑/新建操作
    const handleDeleteClick = (item: any) => {
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id
      })
    }

    // 6.编辑/新建操作
    // 发射事件 向父组件
    const handleNewClick = () => {
      emit("handleNewClick")
    }

    const handleEditClick = (item: any) => {
      emit("handleEditClick", item)
    }

    return {
      isCreate,
      isUpdate,
      isDelete,
      dataList,
      listCount,
      pageInfo,
      otherPropSlots,
      getPageData,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
}
</style>
