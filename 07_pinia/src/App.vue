<script setup>
import { useStoreCounter } from './stores/counter';
import HelloPinia from './components/HelloPinia.vue';
import { storeToRefs } from 'pinia';

const counter = useStoreCounter();
// 分割代入を行ってもreactiveな性質を保持するためにはstoreToRefs関数を利用する必要がある
const { count } = storeToRefs(counter);
const { increment } = counter;
</script>

<template>
  <h1>Pinia入門</h1>
  <p>Count: {{ count }}</p>
  <div>
    <button @click="increment">Up</button>
  </div>
  <HelloPinia />
</template>
