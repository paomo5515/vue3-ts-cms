<template>
  <div class="qc-table">
    <!-- 标题 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelect"
      v-bind="childrenProps"
    >
      <!-- 选择 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        width="55"
        align="center"
      ></el-table-column>
      <!-- 展示序号 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>

      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <!-- 用按钮形式展示数据 -->
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array,
      required: true
    },
    // 序号
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    // 选择
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ["handleSelect", "update:page"],
  setup(props, { emit }) {
    const handleSelect = (value: any) => {
      // console.log(value)
      emit("handleSelect", value)
    }

    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage })
    }
    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize })
    }
    return {
      handleSelect,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 10px;
  .title {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
}
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px 0 0;
}
</style>
