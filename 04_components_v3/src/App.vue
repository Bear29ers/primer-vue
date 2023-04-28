<script setup>
import CompA from './components/CompA.vue';
import { provide } from 'vue';

// provide関数でデータ渡しの設定、template側では何もする必要はない
provide('message', 'Provide/Injectでデータ渡し');
</script>

<template>
  <h1>Vue 3 入門</h1>
  <CompA message="propsでデータ渡し" />
</template>
