<script setup>
import { inject } from 'vue';
import { counter } from '../store/countStore';

const { message } = defineProps(['message']);

// inject関数を利用して、Provideで設定した値をkeyを利用して取得する
const message2 = inject('message');

// const count = inject('count');
// const addCount = inject('addCount');
const { count, addCount } = inject('count');
</script>

<template>
  <h3>CompBコンポーネント</h3>
  <p>{{ message }}</p>
  <p>{{ message2 }}</p>
  <input type="text" v-model="message2" />
  <p>Count:{{ count }}</p>
  <button @click="addCount">+</button>
  <p>Count: {{ counter.count }}</p>
  <button @click="counter.addCount">+</button>
</template>
