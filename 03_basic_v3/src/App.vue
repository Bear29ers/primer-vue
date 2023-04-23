<script setup>
const clickButton = () => {
  console.log('click button');
};
const clickButton2 = (msg) => {
  console.log(msg);
};
const another = (msg) => {
  console.log(msg);
};
const clickButtonEvent = (event) => {
  console.log(event.target);
  event.target.style.backgroundColor = 'red';
};
// const send = (event) => {
//   event.preventDefault();
//   console.log('send');
// };
const send = () => {
  console.log('send');
};
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- clickイベント -->
  <!-- <button v-on:click="clickButton">クリック</button> -->
  <div>
    <button @click="clickButton">クリック</button>
    <button @dbclick="clickButton">ダブルクリック</button>
  </div>
  <div>
    <button @click="clickButton2('クリック')">クリック</button>
    <button @click="clickButton2('クリック'), another('click')">クリック</button>
  </div>
  <!-- eventオブジェクト -->
  <button @click="clickButtonEvent($event)">クリック</button>

  <!-- イベント修飾子 -->
  <!-- <form @submit="send($event)"> -->
  <!--   <button>送信</button> -->
  <!-- </form> -->
  <form @submit.prevent="send">
    <button>送信</button>
  </form>
  <form @submit.prevent="send">
    <button @keyup.enter="submit">Enter送信</button>
  </form>
</template>

<style></style>
