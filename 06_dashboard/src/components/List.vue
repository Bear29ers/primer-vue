<script setup>
import { reactive } from 'vue';
import { RectangleGroupIcon as TemplateIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline';

// メニューリストの情報
const lists = reactive([
  {
    name: 'ダッシュボード',
    icon: 'TemplateIcon',
    link: '/',
  },
  {
    name: 'EC',
    icon: 'ShoppingCartIcon',
    link: '/#',
    sublists: [
      {
        name: '商品一覧',
        link: '/#',
      },
      {
        name: '注文一覧',
        link: '/#',
      },
    ],
  },
]);

// dynamic componentsを利用するためにアイコン名対応のオブジェクトを用意
const icons = {
  TemplateIcon: TemplateIcon,
  ShoppingCartIcon: ShoppingCartIcon,
};
</script>

<template>
  <ul class="text-gray-700">
    <li class="mb-1" v-for="list in lists" :key="list.name">
      <a
        v-if="!list.sublists"
        :href="list.link"
        class="flex items-center p-2 rounded-sm hover:text-white hover:bg-blue-400"
      >
        <component :is="icons[list.icon]" class="w-6 h-6 mr-2"></component>
        <span>{{ list.name }}</span>
      </a>
      <div v-else class="flex items-center p-2 cursor-pointer rounded-sm hover:bg-blue-400 hover:text-white">
        <component :is="icons[list.icon]" class="w-6 h-6 mr-2"></component>
        <span>{{ list.name }}</span>
      </div>
      <ul class="mt-1">
        <li class="mb-1" v-for="list in list.sublists" :key="list.name">
          <a :href="list.link" class="block p-2 rounded-sm hover:bg-blue-400 hover:text-white">
            <span class="pl-8">{{ list.name }}</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>