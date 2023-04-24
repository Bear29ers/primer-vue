<script setup>
import Hello from './components/Hello2.vue';
import { ref } from 'vue';

const name = ref('John');
const changeName = () => {
  name.value = 'Jane';
};

const person = ref({
  name: 'John',
});
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- <Hello message="Propsの使い方" name="John" /> -->
  <!-- <Hello message="defineProps関数を利用" /> -->
  <!-- <Hello /> -->

  <!-- propsで数値を渡したい場合は、v-bindの設定を追加する -->
  <!-- <Hello v-bind:price="1000" /> -->

  <!-- <Hello v-bind:isAdmin="false" /> -->

  <!-- reactiveな変数を渡す -->
  <!-- <Hello :name="name" /> -->
  <!-- reactiveな変数を親コンポーネントで更新すると、propsで渡されたコンポーネント側でその更新が反映される -->
  <!-- <button @click="changeName">Change Name</button> -->

  <!-- <Hello :person="person" /> -->

  <!-- class属性の設定 -->
  <Hello class="active" />
  <!-- コンポーネントにid、style属性を渡す -->
  <Hello class="active" id="main" style="color: red" />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
