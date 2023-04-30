<script setup>
import CompB from './CompB.vue';
import { counter } from '../store/countStore';

const { message } = defineProps(['message']);
</script>

<template>
  <h2>CompAコンポーネント</h2>
  <p>Count: {{ counter.count }}</p>
  <CompB :message="message" />
</template>
