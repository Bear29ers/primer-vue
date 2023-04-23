<script setup>
import { ref, reactive, computed } from 'vue';
const count = ref(0);
const user = reactive({
  firstName: 'John',
  lastName: 'Doe',
});

// const fullName = computed(() => {
//   console.log('Computed Function');
//   return `${user.firstName} ${user.lastName}`;
// });
const fFullName = () => {
  console.log('Function');
  return `${user.firstName} ${user.lastName}`;
};
const changeName = () => {
  fullName.value = 'Jane Doe';
};
// Setterを使ってcomputedプロパティを更新する
const fullName = computed({
  get() {
    return `${user.firstName} ${user.lastName}`;
  },
  set(newValue) {
    const names = newValue.split(' ');
    user.firstName = names[0];
    user.lastName = names[names.length - 1];
  },
});

const users = [
  { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
  { id: 2, name: 'Jane Doe', email: 'jane@test.com', admin: false },
  { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
];

const adminUsers = computed(() => users.filter((user) => user.admin === true));
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- <h2>fullName: {{ user.firstName }} {{ user.lastName }}</h2> -->
  <h2>fullName: {{ fullName }}</h2>
  <div v-for="user in adminUsers" :key="user.id">
    <div>{{ user.id }} {{ user.name }} {{ user.email }}</div>
  </div>
  <!-- computed関数におけるキャッシュの検証 -->
  <!-- <h2>fFullName: {{ fFullName() }}</h2> -->
  <!-- <h2>fFullName: {{ fFullName() }}</h2> -->
  <!-- <h2>fFullName: {{ fFullName() }}</h2> -->
  <!-- <h2>fullName: {{ fullName }}</h2> -->
  <!-- <h2>fullName: {{ fullName }}</h2> -->
  <!-- <h2>fullName: {{ fullName }}</h2> -->
  <!---->
  <!-- <input type="text" v-model="user.firstName" /> -->
  <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->
  <button @click="changeName">Change Name</button>
</template>

<style></style>
