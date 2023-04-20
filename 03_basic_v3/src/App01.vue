<script setup>
// scriptタグに記述したコードはコンポーネントが読み込まれると自動で実行される
console.log('Hello World');
let message = 'Hello World';
const message2 = '<h2>Good Morning</h2>';

const upperCase = () => {
  message = message.toUpperCase();
};

upperCase();
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p>{{ message }}</p>
  <p>{{ message.length * 10 }}</p>
  <p>{{ message.length > 10 ? 'Long' : 'Short' }}</p>
  <p v-text="message"></p>
  <p v-html="message2"></p>
</template>
