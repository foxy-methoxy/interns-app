<template>
  <BaseHeader>{{ $t("AddUser") }}</BaseHeader>
  <main>
    <UserForm :edit-mode="false" />
  </main>
</template>

<style></style>
<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
import UserForm from "@/components/UserForm.vue";
</script>
