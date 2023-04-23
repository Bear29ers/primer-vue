<script setup>
const languages = ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Rust', 'Go'];
const users = [
  { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
  { id: 2, name: 'Jane Doe', email: 'jane@test.com', admin: false },
  { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
];
const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@test.com',
  admin: true,
};
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- <p>{{ languages[0] }}</p> -->
  <!-- <p>{{ languages[1] }}</p> -->
  <!-- <p>{{ languages[2] }}</p> -->

  <p v-for="language in languages" :key="language">{{ language }}</p>
  <ul>
    <li v-for="(user, index) in users" :key="user.id">{{ index }}-{{ user.id }}:{{ user.name }}({{ user.email }})</li>
  </ul>

  <table>
    <thead>
      <tr>
        <td>ID</td>
        <td>ユーザー名</td>
        <td>Email</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>

  <div v-for="value in user" :key="value">{{ value }}</div>
  <div v-for="(value, name) in user" :key="value">{{ name }}:{{ value }}</div>

  <!-- 複数のv-forを実行 -->
  <div v-for="user in users" :key="user.id">
    <div v-for="(value, name) in user" :key="value">{{ name }}:{{ value }}</div>
  </div>

  <!-- v-forディレクティブとv-ifディレクティブを合わせて利用 -->
  <div v-for="user in users" :key="user.id">
    <!-- adminの値がfalseのユーザーのみ表示される -->
    <div v-if="!user.admin">
      {{ user.name }}
    </div>
  </div>
</template>

<style></style>
