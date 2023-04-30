<script setup>
import User from './components/User2.vue';
import User2 from './components/User3.vue';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <User>
    <!-- defaultのslotからslot propsを受け取るので、v-slot:defaultに任意の名前を設定する -->
    <!-- 分割代入でpropsの値を受け取ることもできる -->
    <template v-slot:default="{ message, content }"> {{ message }}/{{ content }} </template>
    <!-- v-slotを#にして省略できる -->
    <template #header="slotProps">
      <div>{{ slotProps }}</div>
    </template>
  </User>
  <ul>
    <User2>
      <!-- slot propsのuserを受け取った親コンポーネントでオブジェクトのプロパティを表示 -->
      <!-- 親コンポーネントで表示内容を決定できるため、コンポーネントの使い所が増える -->
      <template v-slot="{ user }">
        <li>{{ user.name }}</li>
      </template>
    </User2>
  </ul>
</template>
