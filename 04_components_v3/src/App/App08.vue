<script setup>
import { ref, computed } from 'vue';
import Tokyo from './components/Tokyo.vue';
import Kyoto from './components/Kyoto.vue';

const city = ref('tokyo');

const tabs = {
  tokyo: Tokyo,
  kyoto: Kyoto,
};
const tab = computed(() => tabs[city.value]);
</script>

<template>
  <h1>Vue 3 入門</h1>
  <div>
    <button @click="city = 'tokyo'">東京</button>
    <button @click="city = 'kyoto'">京都</button>
  </div>
  <div>
    <!-- reactive変数とv-ifディレクティブを使って表示を切り替える -->
    <Tokyo v-if="city === 'tokyo'" />
    <Kyoto v-else />
  </div>
  <!-- componentタグとis属性を利用してDynamicコンポーネントを実装 -->
  <!-- コンポーネントを切り替えた場合にコンポーネントの状態を保持するためにkeep-aliveタグで囲う -->
  <keep-alive>
    <component v-bind:is="tab"></component>
  </keep-alive>
</template>
