<script setup lang="ts"></script>

<template>
  <div class="home">
    <h1 class="header">Willkommen bei der neuartigen Kleiderspende</h1>
    <div class="info">
      <p>Sie entscheiden wo Ihre Spende hingeht!</p>
    </div>
  </div>
</template>

<style scoped lang="less">
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.home {
  --animation-duration: 2s;

  .header {
    animation: fadeIn var(--animation-duration) ease-in-out;
  }
  .info:not(.header) {
    opacity: 0;
    animation: fadeIn var(--animation-duration) ease-in-out calc(var(--animation-duration) / 2)
      forwards;
  }
}
</style>
