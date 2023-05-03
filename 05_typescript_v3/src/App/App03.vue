<script setup lang="ts">
import { reactive, computed } from 'vue';

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

const user: User = reactive({
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
});

const fullName = computed<string>(() => `${user.firstName} ${user.lastName}`);

const changeName = (name: string): void => {
  user.firstName = name;
};

changeName('Jane');
</script>

<template>
  <div>FullName: {{ fullName }}</div>
</template>
