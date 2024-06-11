<script setup lang="ts">
import TheLogo from './TheLogo.vue';
import { RouterLink } from 'vue-router';

const routes = [{ path: '/formular', name: 'Jetzt spenden' }];
</script>

<template>
  <header>
    <nav>
      <TheLogo />
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
a {
  text-decoration: none;
  color: var(--vt-c-indigo);
  border: 2px solid var(--vt-c-indigo);
  border-radius: 8px;
  transition: 0.4s;
  padding: 0.125rem 0.5rem;
  background-color: var(--color-background);
}

a:hover {
  background-color: rgb(94, 114, 218);
  color: rgb(24, 24, 24);
  border-color: rgb(24, 24, 24);
}

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
