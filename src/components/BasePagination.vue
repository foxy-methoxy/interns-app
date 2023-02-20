<script setup lang="ts">
import { useInternsStore } from "@/stores/interns";
import { DArrowLeft, DArrowRight } from "@element-plus/icons-vue";

const { pagination } = useInternsStore();
const emit = defineEmits(["pageChange"]);

const changePage = (page: number) => emit("pageChange", page);
</script>

<template>
  <el-pagination
    id="element-pagination"
    background
    :total="pagination.total"
    :page-count="pagination.totalPages"
    :current-page="pagination.currentPage"
    layout="prev, pager, next"
    @current-change="changePage"
    :prev-icon="DArrowLeft"
    :next-icon="DArrowRight"
  />
</template>

<style scoped lang="scss">
#element-pagination {
  --el-color-primary: var(--basic-green);
}
</style>
