<script setup>
// const error = true;
const error = '';
const stock = 0;
const error2 = true;
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div v-if="error">{{ error }}</div>
  <div v-else>エラーはありません。</div>
  <!-- <div v-if="error">エラーが発生しています。</div> -->

  <div v-if="stock > 5">まだ商品の在庫数に余裕があります。</div>
  <div v-else-if="stock === 0">申し訳ございません。現在売り切れです。</div>
  <div v-else>在庫数が少なくなっています。お急ぎください。</div>

  <div v-if="error2">エラーが発生しています。(v-if)</div>
  <div v-show="error2">エラーが発生しています。(v-show)</div>
  <!--
  v-if、v-showの違い
  条件がfalseの場合
  v-showのdisplayのnone、blockの切り替えはv-ifによる要素の追加、削除より処理の負荷が低い。
  ユーザーとのインタラクティブによってスピードは重要なので、可能な限り負荷が低い処理を実行することに意味がある。
  例えばドロップダウンメニューのように非表示の時には何も表示されず、表示・非表示を繰り返すような機能にv-showは適している。
  -->
</template>

<style></style>
