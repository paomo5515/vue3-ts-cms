<template>
  <div class="role">
    <SearchPage :searchFormConfig="searchFormConfig" />
    <PageCount :contentTableConfig="contentTableConfig" pageName="role" />
  </div>
</template>

<script lang="ts" setup>
import PageCount from "@/components/page-content"
import SearchPage from "@/components/search-page"
import { contentTableConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
</script>

<style scoped lang="scss"></style>
