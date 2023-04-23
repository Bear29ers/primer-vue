<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';

const message = ref('Hello World');

const clickButton = () => {
  console.log(message.value);
};

const form = reactive({
  message: 'Hello World',
});

const clickButton2 = () => {
  console.log(form.message);
};
</script>

<template>
  <h1>Vue 3 入門</h1>
  <p>{{ message }}</p>
  <input type="text" v-model="message" />
  <!-- v-modelを分解 -->
  <!-- <input type="text" :value="message" @input="message = $event.target.value" /> -->
  <div>
    <button @click="clickButton">Click</button>
  </div>
  <input type="text" v-model="form.message" />
  <div>
    <button @click="clickButton2">Click</button>
  </div>
  <!-- 修飾子（Modifiers） -->
  <!-- lazy - input要素からカーソルを外した場合に変更が反映される -->
  <input type="text" v-model.lazy="reactiveな変数名" />
  <!-- trim - カーソルを外すと前後の空白を取り除いてくれる -->
  <input type="text" v-model.trim="reactiveな変数名" />
  <!-- number - 数字として取得したい場合、typeがtextであっても数値になる -->
  <input type="text" v-model.number="reactiveな変数名" />
</template>

<style></style>
