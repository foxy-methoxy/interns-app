<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import InternsTable from "@/components/InternsTable.vue";
import BaseSearch from "@/components/BaseSearch.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import Modal from "@/components/Modal.vue";
import { useInternsStore } from "@/stores/interns";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import BasePagination from "@/components/BasePagination.vue";
import { useRouter } from "vue-router";
import { Plus } from "@element-plus/icons-vue";

const { fetchInterns, filterList } = useInternsStore();
const { filteredInterns } = storeToRefs(useInternsStore());
const { push } = useRouter();
fetchInterns();

const open = ref(false);
const internToDelete = ref(0);
const searchQuery = ref("");
const toggleModal = (id: number) => {
  open.value = !open.value;
  internToDelete.value = id;
};

const goToAddUserView = () => push("/add-intern");
</script>

<template>
  <BaseHeader>{{ $t("UserList") }}</BaseHeader>

  <main>
    <div class="interns-list-view">
      <div class="interns-list-view__header">
        <BaseSearch
          class="header__search"
          v-model="searchQuery"
          @update:model-value="filterList(searchQuery)"
        />
        <BaseButton @click="goToAddUserView" :icon="Plus" round>{{
          $t("AddUser")
        }}</BaseButton>
      </div>
      <div class="interns-list-view__table">
        <InternsTable :data="filteredInterns" @toggle-modal="toggleModal" />
      </div>
      <BasePagination @page-change="fetchInterns" class="pagination" />
      <Modal :open="open" @close-modal="toggleModal" :id="internToDelete" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.interns-list-view {
  padding: 3rem 0;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
}

.header {
  &__search {
    width: 25rem;
  }
}

.pagination {
  margin-top: 2rem;
}
</style>
