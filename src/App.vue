<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <div class="content">
      <RouterView />
    </div>
  </div>
  <TheFooter />
</template>

<style scoped lang="less">
.wrapper {
  max-width: 1024px;
  margin: 0 auto;

  .content {
    padding: 2rem;
  }
}
</style>
