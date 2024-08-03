<template>
  <nav>
    <RouterLink to="/">Main</RouterLink> |
    <RouterLink to="/prices">Prices</RouterLink> |
    <RouterLink to="/contact">Contact</RouterLink> |
    <RouterLink to="/details">Details</RouterLink>
  </nav>
  <main class="flex-1 flex items-center justify-center py-6">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
  import MainPage from './moduls/landing/pages/MainPage.vue';
</script>