<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import Toast from 'primevue/toast';
</script>

<template>
  <div class="content">
    <TheHeader />
    <div class="main">
      <RouterView />
    </div>
    <TheFooter />
  </div>
  <Toast />
</template>

<style scoped lang="less">
.content {
  max-width: 1024px;
  min-height: 100vh;

  margin: 0 auto;
  background-color: var(--color-background);

  .main {
    margin: 1rem;
    // This is to fix the footer overlapping the content
    padding: 0 0 2rem 0;
  }
}
</style>
