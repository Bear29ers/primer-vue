<script setup lang="ts">
import HelloWorld from './components/HelloWorld2.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';

export type User = {
  firstName: string;
  lastName: string;
  age: number;
};

const user = ref<User>({
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
});

const changeName = (firstName: Ref<string>) => {
  user.value.firstName = firstName.value;
};
</script>

<template>
  <HelloWorld msg="Hello" :user="user" @changeName="changeName" />
</template>
