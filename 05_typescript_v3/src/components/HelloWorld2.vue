<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../App.vue';
import type { Ref } from 'vue';

interface Props {
  msg: string;
  user: User;
}
defineProps<Props>();

// emitの設定
const emit = defineEmits<{
  (event: 'changeName', firstName: Ref<string>): void;
}>();
// emitの別の記述方法
// const emit = defineEmits(['changeName']);

const changeName = () => {
  console.log('change name');
  // emit('changeName', 'Jane');
  emit('changeName', firstName);
};

const firstName = ref<string>('');
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>FullName: {{ `${user.firstName} ${user.lastName}` }}</div>
    <input type="text" v-model="firstName" /><br />
    <button @click="changeName">Change Name</button>
  </div>
</template>
