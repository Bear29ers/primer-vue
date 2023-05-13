<script setup>
import { useStoreCounter } from '../stores/counter';

const counter = useStoreCounter();
// $patchメソッドでstateの値を更新
const patch = () => {
  counter.$patch({
    count: 100,
    user: {
      name: 'Jane Doe',
    },
  });

  /*
  counter.$patch((state) => {
    state.count = 10;
    state.user.name = 'Kevin Doe';
  });
   */
};

// $stateに値を設定することで指定したプロパティの値にすべて取り替えることができる
const replace = () => {
  counter.$state = {
    count: 100,
    count2: 200,
    user: {
      name: 'Jane Doe',
    },
  };
};
</script>

<template>
  <h2>Hello Pinia</h2>
  <p>カウント: {{ counter.count }}</p>
  <!-- $resetメソッドにより初期値にリセット -->
  <button @click="counter.$reset">Reset</button>
  <button @click="patch">Patch</button>
  <button @click="replace">Replace</button>
</template>
