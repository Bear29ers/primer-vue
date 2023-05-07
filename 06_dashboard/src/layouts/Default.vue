<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Bars3Icon as MenuIcon } from '@heroicons/vue/24/outline';
import { debounce } from 'lodash';

// アクセス時のブラウザ幅に合わせてサイドバーを表示させる（1280pxより大きい場合はサイドバーが表示された状態）
const innerWidth = ref(window.innerWidth);
const show = ref(innerWidth.value >= 1280 ? true : false);

// リサイズ時にブラウザ幅を考慮してサイドバーを表示させる
const checkWindowSize = () => {
  if (window.innerWidth >= 1280) {
    if (show.value === false && innerWidth.value < 1280) show.value = true;
  } else {
    if (show.value === true) show.value = false;
  }
  innerWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', debounce(checkWindowSize, 100));
});

onUnmounted(() => {
  window.removeEventListener('resize', checkWindowSize);
});
</script>

<template>
  <div class="relative">
    <div class="fixed top-0 w-64 h-screen bg-white z-20 transform duration-300" :class="{ '-translate-x-full': !show }">
      サイドバー
    </div>
    <div class="fixed xl:hidden inset-0 bg-gray-900 opacity-50 z-10" @click="show = !show" v-show="show"></div>
    <div class="bg-gray-100 h-screen overflow-hidden duration-300" :class="{ 'xl:pl-64': show }">
      <div class="bg-white rounded shadow m-4 p-4">
        <MenuIcon class="h-6 w-6 text-gray-600 cursor-pointer" @click="show = !show" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
