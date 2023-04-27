<script setup>
import { ref } from 'vue';

const users = ref([]);

const fetchPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  users.value = await res.json();
};
fetchPost();
</script>

<template>
  <!-- APIから取得したusersデータを展開し、slot propsのuserとして親コンポーネントに渡す -->
  <slot v-for="user in users" :user="user"></slot>
</template>
