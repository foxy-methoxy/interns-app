<template>
  <BaseHeader>{{ $t("EditUser") }}</BaseHeader>
  <main>
    <UserForm :user="editedIntern" />
  </main>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
import UserForm from "@/components/UserForm.vue";
import { storeToRefs } from "pinia";
import { useInternsStore } from "@/stores/interns";
import { useRoute } from "vue-router";

const { getEditedUser } = useInternsStore();
const { editedIntern } = storeToRefs(useInternsStore());

const { params } = useRoute();

getEditedUser(params.id as unknown as number);
</script>

<style scoped></style>
