<script setup>
const activeColor = 'red';
const fontStress = '900';

const styleObject = {
  color: 'red',
  fontWeight: 900,
};

// const styleObject = 'color:red;font-weight:900';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- <p :style="{ color: activeColor, fontWeight: fontStress }">v-bindの設定方法の確認</p> -->
  <p :style="styleObject">v-bindの設定方法の確認</p>
</template>

<style></style>
