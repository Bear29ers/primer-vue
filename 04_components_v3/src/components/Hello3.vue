<script setup>
// const emit = defineEmits(['notification']);
// defineEmitsでイベント名を設定する
// const sendNotification = () => {
//   emit('notification');
// };

import { ref } from 'vue';

const props = defineProps({
  name: String,
});

const name = ref(props.name);

const emit = defineEmits(['changeNameEvent']);

const changeName = () => {
  // 第一引数にイベント名、第二引数に親コンポーネントに渡したいデータを設定できる
  // emit('changeNameEvent', 'Kevin');
  // emit('changeNameEvent', { firstName: 'Kevin', lastName: 'James' });
  emit('changeNameEvent', name.value);
};
</script>

<template>
  <h2>子コンポーネント</h2>
  <!-- emitではイベントを利用し、子コンポーネントから親コンポーネントに通知を行う -->
  <!-- <button @click="$emit('notification')">通知</button> -->
  <!-- <button @click="sendNotification">通知</button> -->
  <p>Hello {{ props.name }}</p>
  <!-- <button @click="changeName">Change Name</button> -->
  <input type="text" v-model="name" @input="changeName" />
  <input type="text" :value="props.name" @input="$emit('changeNameEvent', $event.target.value)" />
</template>
