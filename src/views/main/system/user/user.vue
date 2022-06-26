<template>
  <div class="user">
    <div class="search">
      <QCForm v-bind="formConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

// 用户管理
<script lang="ts" setup>
import QCForm from "@/base-ui/form"
import { formConfig } from "./config/search-config"
</script>

<style scoped lang="scss"></style>
