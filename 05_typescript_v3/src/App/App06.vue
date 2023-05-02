<script setup lang="ts">
import { ref, onMounted } from 'vue';

const name = ref<string>('John');
const input = ref<HTMLInputElement | null>(null);
const ahref = ref<HTMLAnchorElement | null>(null);

onMounted(() => {
  if (input.value) {
    input.value.focus();
    // input.value?.focus();
    // console.log(input.value);
  }
});
</script>

<template>
  <input type="text" ref="input" v-model="name" /><br />
  <a ref="ahref" href="https://google.com">Google</a>
</template>
