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

<script lang="ts" src="./MyCounter.ts"></script>