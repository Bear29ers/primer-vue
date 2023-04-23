<script setup>
import { ref, reactive, watch, watchEffect } from 'vue';

const count = ref(0);
const count2 = ref(100);

watch(count, (count, previousCount) => {
  console.log('count:', count);
  console.log('previousCount:', previousCount);
});

const state = reactive({
  count: 0,
});

watch(
  () => state.count,
  (count, previousCount) => {
    console.log('count:', count);
    console.log('previousCount:', previousCount);
  }
);
watch(
  () => state,
  (state, previousCount) => {
    console.log('state:', state);
    console.log('previousCount:', previousCount);
  },
  // オブジェクトの変更を検知するオプション
  // { deep: true }
  // ページを開いた直後に実行
  { immediate: true }
);

watchEffect(() => console.log(count.value));
watchEffect(() => console.log(`${count.value}/${count2.value}`));
</script>

<template>
  <h1>Vue 3 入門</h1>
  <button @click="count++">Count: {{ count }}</button>
  <button @click="count2++">Count2: {{ count2 }}</button>
  <br />
  <button @click="state.count++">Count: {{ state.count }}</button>
  <br />
</template>

<style></style>
