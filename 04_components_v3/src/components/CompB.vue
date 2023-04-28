<script setup>
import { inject } from 'vue';
const { message } = defineProps(['message']);

// inject関数を利用して、Provideで設定した値をkeyを利用して取得する
const message2 = inject('message');
</script>
<template>
  <h3>CompBコンポーネント</h3>
  <p>{{ message }}</p>
  <p>{{ message2 }}</p>
</template>
