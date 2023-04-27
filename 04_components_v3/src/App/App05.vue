<script setup>
import { ref } from 'vue';
// import Input from './components/Input.vue';
import Hello from './components/Hello4.vue';

const name = ref('John Doe');

const handleEvent = (newName) => {
  name.value = newName;
};
</script>

<template>
  <h1>Vue 3 入門</h1>
  <Hello @changeNameEvent="handleEvent" :name="name" />
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
