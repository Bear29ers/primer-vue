<script setup>
import Hello from './components/Hello3.vue';
import { ref } from 'vue';

// const handleEvent = () => {
//   console.log('子コンポーネントからの通知');
// };

const name = ref('John');

const handleEvent = (newName) => {
  // name.value = newName;
  name.value = newName;
};
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- <Hello v-on:notification="handleEvent" /> -->
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
