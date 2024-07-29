<template>
    <h1>Testings</h1>
    <section>
      <h3>Contador: {{ counter }}</h3>
      <h3>Cuadrado: {{ calculateSquare }}</h3>
      <div>
        <button @click="counter++">Incrementar</button>
        <button @click="counter--">Decrementar</button>
      </div>
      <br />
    </section>
  </template>

  <script lang="ts" setup>
    import { computed, ref } from 'vue';

    interface Props {
      value: number;
      default: number;
    }
    const props = defineProps<Props>();
    
    const counter = ref(props.value);
    const calculateSquare = computed(() => counter.value * counter.value);
   </script>