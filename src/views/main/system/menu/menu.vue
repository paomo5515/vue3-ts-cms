<template>
  <div class="menu">
    <PageCount :contentTableConfig="contentTableConfig" pageName="menu" />
  </div>
</template>

<script lang="ts" setup>
import PageCount from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"
</script>

<style scoped lang="scss"></style>
