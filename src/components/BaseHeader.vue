<template>
  <header class="header">
    <h1 class="header__title">
      <slot />
    </h1>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: flex-start;
}
</style>
