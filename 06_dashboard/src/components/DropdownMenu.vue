<script setup lang="ts">
import { ref } from 'vue';
import { UserIcon, ArrowRightOnRectangleIcon as LogoutIcon } from '@heroicons/vue/24/outline';

const show = ref(false);

// showの値によってメニューの表示・非表示を切り替える
const toggle = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="relative">
    <img src="../assets/avatar.jpg" alt="avatar" class="rounded-full w-10 h-10 cursor-pointer" @click="toggle" />
    <transition
      enter-active-class="transition duration-300"
      enter-from-class="transform opacity-0 -translate-y-2 duration-300"
      leave-active-class="transitionduration-300"
      leave-to-class="transform opacity-0 duration-300"
    >
      <div class="absolute top-16 right-0 z-10 w-40 py-2 bg-white rounded-sm shadow" v-show="show">
        <ul>
          <li class="text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-2">
            <a href="/#" class="flex items-center space-x-2">
              <UserIcon class="w-5 h-5" />
              <span class="text-sm font-bold">プロファイル</span>
            </a>
          </li>
          <li class="text-gray-700 hover:bg-blue-100 hover:text-blue-600 p-2">
            <a href="/#" class="flex items-center space-x-2">
              <LogoutIcon class="w-5 h-5" />
              <span class="text-sm font-bold">ログアウト</span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
