<script setup lang="ts">
import { ref } from 'vue';

const year = ref<Number>(new Date().getFullYear());
</script>

<template>
  <footer>
    <div class="content">
      <p>&copy; {{ year }} Kleiderspenden Registrierung</p>
      <small class="hint"
        >Erstellt von Kajeepan Kandeepan. Hier stehen ein paar rechtliche Hinweise.
        <a href="https://pixabay.com/vectors/animal-animals-bird-flying-2023924/" target="_blank"
          >Logo</a
        ></small
      >
    </div>
  </footer>
</template>

<style scoped lang="less">
a {
  text-decoration: none;
}
footer {
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;

  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #0f0f0f;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hint {
    color: #fff;
    font-size: 0.75rem;
  }
}
</style>
