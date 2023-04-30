<script setup>
import CompA from './components/CompA.vue';
import { provide, ref } from 'vue';
const message = ref('Provide/Injectでデータ渡し');

// provide関数でデータ渡しの設定、template側では何もする必要はない
// provide('message', 'Provide/Injectでデータ渡し');
provide('message', message);

const count = ref(0);

// Injectで渡した値を子コンポーネントで直接更新できないため、値を更新する関数をInjectで渡す
const addCount = () => {
  count.value++;
};

// provide('count', count);
// provide('addCount', addCount);
provide('count', {
  count,
  addCount,
});
</script>

<template>
  <h1>Vue 3 入門</h1>
  <CompA message="propsでデータ渡し" />
</template>
