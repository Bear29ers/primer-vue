<script setup lang="ts">
import { ref, reactive } from 'vue';
// 型をimportする
import type { Ref } from 'vue';

// 型推論によって自動で設定されるが、明示的に設定したい場合は以下のように記述する
// const count = ref<number>(0);
const count: Ref<number> = ref(0);

// interfaceでオブジェクトの型定義を行う
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

// 型エイリアスで型定義
// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

const user: User = reactive({
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
});

// 型アサーションで型の上書きを行う
const user2 = reactive({} as User);
user2.firstName = 'Kevin';
user2.lastName = 'McDonald';
user2.age = 25;
</script>

<template>
  <div>Count: {{ count }}</div>
  <button @click="count++">Add Count</button>
  <div>Fullname: {{ `${user.firstName} ${user.lastName}` }}</div>
  <div>Fullname: {{ `${user2.firstName} ${user2.lastName}` }}</div>
</template>
