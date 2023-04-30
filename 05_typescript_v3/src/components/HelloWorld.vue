<script setup lang="ts">
import type { User } from '../App.vue';

// interfaceで型定義
interface Props {
  msg: string;
  user: User;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>FullName: {{ `${user.firstName} ${user.lastName}` }}</h1>
  </div>
</template>
