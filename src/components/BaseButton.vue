<script setup lang="ts"></script>

<template>
  <el-button type="success" id="element-button">
    <slot />
  </el-button>
</template>

<style scoped lang="scss">
#element-button {
  --el-color-success: var(--basic-green);
}
</style>
