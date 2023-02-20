<script setup lang="ts">
import { DeleteFilled, Edit } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const { push } = useRouter();
const emit = defineEmits(["toggleModal"]);
const goToEditView = (id: number) => {
  push(`/edit-intern/${id}`);
};
const toggleModal = (id: number) => emit("toggleModal", id);
</script>

<template>
  <el-table stripe>
    <el-table-column prop="avatar" width="100">
      <template #default="scope">
        <img :src="scope.row.avatar" alt="/" class="table__avatar" />
      </template>
    </el-table-column>
    <el-table-column prop="fullName" :label="$t('FullName')"></el-table-column>
    <el-table-column
      prop=""
      :label="$t('Action')"
      width="100"
      class-name="table__actions-column"
    >
      <template #default="scope">
        <el-icon
          @click="goToEditView(scope.row.id)"
          class="table__actions-column__icon"
          ><Edit
        /></el-icon>
        <el-icon
          class="table__actions-column__icon"
          @click="toggleModal(scope.row.id)"
          ><DeleteFilled
        /></el-icon>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss">
.table {
  &__avatar {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }

  &__actions-column {
    &__icon {
      cursor: pointer;
    }
  }
}

:deep(.table__actions-column) {
  .cell {
    display: flex;
    justify-content: space-around;
  }
}
</style>
