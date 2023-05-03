<script setup lang="ts">
import { Bars3Icon as MenuIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="relative">
    <div class="fixed top-0 w-64 h-screen bg-white z-20">サイドバー</div>
    <div class="bg-gray-100 h-screen overflow-hidden pl-64">
      <div class="bg-white rounded shadow m-4 p-4">
        <MenuIcon class="h-6 w-6 text-gray-600 cursor-pointer" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
