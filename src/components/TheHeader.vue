<script setup lang="ts">
import { RouterLink } from 'vue-router';

const routes = [{ path: '/formular', name: 'Jetzt spenden' }];
</script>

<template>
  <header>
    <nav>
      <RouterLink class="title" to="/">
        <div class="large-header">Kleiderspenden Registrierung</div>
        <div class="small-header">KSR</div>
      </RouterLink>
      <span class="spacer"></span>
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path">{{
        route.name
      }}</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="less">
header {
  background-color: #0f0f0f;
  color: white;
  padding: 1rem;
}
nav {
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;

  .spacer {
    flex-grow: 1;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
}

.large-header,
.small-header {
  transition:
    opacity 0.5s ease,
    height 0.5s ease;
  height: auto;
  width: auto;
  opacity: 1;
}

@media (max-width: 600px) {
  .large-header {
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
  }
}

@media (min-width: 600px) {
  .small-header {
    opacity: 0;
    height: 0;
    width: 0;
    overflow: hidden;
  }
}
</style>
