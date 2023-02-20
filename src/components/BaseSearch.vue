<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
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
<template>
  <el-input :placeholder="$t('Search')" v-model="value" class="base-search">
    <template #suffix>
      <el-icon><Search /></el-icon>
    </template>
  </el-input>
</template>
<style scoped lang="scss">
.base-search {
  margin-right: 2rem;
}
</style>
