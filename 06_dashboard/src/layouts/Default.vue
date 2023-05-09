<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Bars3Icon as MenuIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import { debounce } from 'lodash';
import DropdownMenu from '../components/DropdownMenu.vue';

// アクセス時のブラウザ幅に合わせてサイドバーを表示させる（1280pxより大きい場合はサイドバーが表示された状態）
const innerWidth = ref(window.innerWidth);
const show = ref(innerWidth.value >= 1280 ? true : false);

// テーマ切り替え用変数
const theme = ref('light');

// ローカルストレージからテーマの値を確認する
if (localStorage.theme === 'dark') {
  document.documentElement.classList.add('dark');
  theme.value = 'dark';
} else {
  document.documentElement.classList.remove('dark');
  theme.value = 'light';
}

// リサイズ時にブラウザ幅を考慮してサイドバーを表示させる
const checkWindowSize = () => {
  if (window.innerWidth >= 1280) {
    if (show.value === false && innerWidth.value < 1280) show.value = true;
  } else {
    if (show.value === true) show.value = false;
  }
  innerWidth.value = window.innerWidth;
};

// テーマ切り替える
const changeMode = (mode: string) => {
  theme.value = mode;
  theme.value === 'light'
    ? document.documentElement.classList.remove('dark')
    : document.documentElement.classList.add('dark');
  // ローカルストレージにthemeの値を保存する
  localStorage.theme = mode;
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
    <div
      class="fixed top-0 w-64 h-screen bg-white dark:bg-gray-800 z-20 transform duration-300 dark:text-gray-300"
      :class="{ '-translate-x-full': !show }"
    >
      サイドバー
    </div>
    <div class="fixed xl:hidden inset-0 bg-gray-900 opacity-50 z-10" @click="show = !show" v-show="show"></div>
    <div class="bg-gray-100 dark:bg-gray-900 h-screen overflow-hidden duration-300" :class="{ 'xl:pl-64': show }">
      <div class="flex items-center justify-between bg-white dark:bg-gray-800 rounded shadow m-4 p-4">
        <MenuIcon class="h-6 w-6 text-gray-600 dark:text-gray-300 cursor-pointer" @click="show = !show" />
        <div class="flex items-center space-x-4">
          <MoonIcon class="w-7 h-7 text-gray-600 cursor-pointer" @click="changeMode('dark')" v-if="theme === 'light'" />
          <SunIcon class="w-7 h-7 text-gray-300 cursor-pointer" @click="changeMode('light')" v-else />
          <DropdownMenu />
        </div>
      </div>
      <div class="dark:text-gray-300">
        <slot />
      </div>
    </div>
  </div>
</template>
