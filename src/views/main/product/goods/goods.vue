<template>
  <div class="goods">
    <PageCount :contentTableConfig="contentTableConfig" pageName="goods">
      <!-- 商品图片插槽 -->
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          preview-teleported="true"
        ></el-image>
      </template>

      <template #oldPrice="scope">{{ "￥" + scope.row.oldPrice }}</template>
    </PageCount>
  </div>
</template>

<script lang="ts" setup>
import PageCount from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"
</script>

<style scoped lang="scss">
.el-image {
  width: 100%;
  height: 200px;
}
</style>
