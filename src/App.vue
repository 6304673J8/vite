<script setup>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import ThreeScene from './components/ThreeScene.vue'
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <ThreeScene />
</template>

export default {
  name: 'App',
  components: {
    Header
  }
};

<style scoped>
#app {
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(45deg, #63D4D5, #1D4646);
}
a {
  color: #42b983;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
