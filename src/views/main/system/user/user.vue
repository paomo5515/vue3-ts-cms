<template>
  <div class="user">
    <SearchPage
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="resetBtnClick"
      @queryBtnClick="queryBtnClick"
    />

    <PageCount
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
    />

    <!-- 新建按钮 提示框 -->
    <PageModal :modalConfig="modalConfig" />
  </div>
</template>

// 用户管理
<script lang="ts" setup>
import { ref } from "vue"
import SearchPage from "@/components/search-page"
import PageCount from "@/components/page-content"
import PageModal from "@/components/page-modal"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"
import { usePageSearch } from "@/hooks/usePageSearch"

const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()
</script>

<style scoped lang="scss"></style>
