<template>
  <el-input v-model="value">
    <slot />
  </el-input>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped></style>
