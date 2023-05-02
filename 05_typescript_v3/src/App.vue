<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const handleChange = (event: Event) => {
  // 型アサーションを使ってHTMLInputElementの型を上書き
  console.log((event.target as HTMLInputElement).value);
};

const handleChange2 = (event: Event, comment: string) => {
  console.log((event.target as HTMLInputElement).value);
  console.log(comment);
};

// mousemoveイベントの例
const x = ref<number>(0);
const y = ref<number>(0);

const handleMouseMove = (event: MouseEvent) => {
  x.value = event.pageX;
  y.value = event.pageY;
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <input type="text" @change="handleChange" />
  <input type="text" @change="handleChange2($event, 'eventの型の確認')" />
  <div>
    <span>x: {{ x }} y: {{ y }}</span>
  </div>
</template>
