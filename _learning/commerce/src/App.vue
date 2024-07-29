<template>
  <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/prices">Prices</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/details">Details</router-link>
  </nav>
  <main class="bg-slate-100">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
  import MainPage from './moduls/landing/pages/MainPage.vue';
</script>