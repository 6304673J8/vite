<template>
  <div>
    <h1 class="text-center text-success display-3">Testings</h1>
    <hr>
    <MyCounter :value="5"/>
    <MyCounter :value="10"/>
  </div>
</template>

<script lang="ts" setup>
  import MyCounter from './components/counter/MyCounter.vue'
</script>