<script setup>
const link = 'https://google.com';
const isActive = true;
const isWhite = true;
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div>
    <a v-bind:href="link">Google</a>
    <!-- 
    v-bindを頻繁に利用する例
    ・imgタグのsrc属性
    ・buttonタグのdisabled属性
    -->

    <!-- class属性 -->
    <p class="active">v-bindの設定方法の確認</p>
    <p class="underline" :class="{ active: isActive }">v-bindの設定方法の確認</p>
    <p :class="{ 'underline active': isActive }">v-bindの設定方法の確認</p>
    <!-- 複数のclassを指定する -->
    <p class="underline" :class="{ active: isActive, back: isWhite }">v-bindの設定方法の確認</p>
    <p :class="{ 'underline active': isActive, back: isWhite }">v-bindの設定方法の確認</p>
    <!-- 論理演算子を使ったclassを指定する -->
    <p :class="isActive && 'active'">v-bindの設定方法の確認</p>
    <p :class="isActive ? 'underline' : 'active'">v-bindの設定方法の確認</p>
  </div>
</template>

<style>
.active {
  color: red;
  font-weight: 900;
}
.underline {
  text-decoration: underline;
}
.back {
  background-color: white;
}
</style>
