<script setup>
// ref関数を利用して変数にreactivityを持たせる
// import { ref } from 'vue';
// const count = ref(0);
let count = $ref(0);
// ref関数で定義したreactiveな変数countはオブジェクトでラップされており、valueプロパティのみ持っている。
console.log(count.value);

const addCount = () => {
  count++;
};

// reactiveを利用する方法
import { reactive } from 'vue';
const state = reactive({
  count: 0,
});
const addCount2 = () => {
  state.count++;
};
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
  <!-- scriptタグ内でcountの数を増やす方法 -->
  <div>
    <button type="button" @click="addCount">count is: {{ count }}</button>
  </div>
  <!-- reactive関数 -->
  <div>
    <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  </div>
  <button type="button" @click="addCount2">count is: {{ state.count }}</button>
  <!--
  refとreactiveの違い
  refの場合はscriptタグ内で値にアクセスする場合にvalueを利用すること。
  reactiveではオブジェクトのみを扱うのに対してrefでは確認したようにprimitiveな値（stringやbooleanなど）もオブジェクトとして設定できる。
  -->
</template>

<style></style>
