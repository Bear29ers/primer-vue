<script setup>
import { ref } from 'vue';
import Input from './components/Input.vue';

const name = ref('John Doe');
const address = ref('');
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p>name: {{ name }}</p>
  <p>address: {{ address }}</p>

  <div>
    <Input :model-value="name" @update:model-value="name = $event" />
    <Input :model-value="address" @update:model-value="address = $event" />
  </div>
  <div>
    <Input v-model="name" />
    <Input v-model="address" />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
