<script setup>
import { reactive } from 'vue';
import { RectangleGroupIcon as TemplateIcon, ShoppingCartIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';

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
    show: false,
    sublists: [
      {
        name: '商品一覧',
        link: '/#',
      },
      {
        name: '注文一覧',
        link: '/#',
      },
      {
        name: 'カテゴリー一覧',
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

// リストの表示・非表示（showの値を更新）
const toggle = (name) => {
  const list = lists.find((list) => list.name === name);
  list.show = !list.show;
};

// サブメニューを開いた際に高さを取得して設定する
const enter = (element) => {
  element.style.height = 'auto';
  const height = getComputedStyle(element).height;
  element.style.height = 0;
  getComputedStyle(element);
  setTimeout(() => {
    element.style.height = height;
  });
};

// サブメニューを閉じる際に高さを設定する
const leave = (element) => {
  element.style.height = getComputedStyle(element).height;
  getComputedStyle(element);
  setTimeout(() => {
    element.style.height = 0;
  });
};
</script>

<template>
  <ul class="text-gray-700 dark:text-gray-300">
    <li class="mb-1" v-for="list in lists" :key="list.name">
      <a
        v-if="!list.sublists"
        :href="list.link"
        class="flex items-center p-2 rounded-sm hover:text-white hover:bg-blue-400"
      >
        <component :is="icons[list.icon]" class="w-6 h-6 mr-2"></component>
        <span>{{ list.name }}</span>
      </a>
      <div
        v-else
        class="flex items-center justify-between p-2 cursor-pointer rounded-sm hover:bg-blue-400 hover:text-white"
        @click="toggle(list.name)"
      >
        <div class="flex items-center">
          <component :is="icons[list.icon]" class="w-6 h-6 mr-2"></component>
          <span>{{ list.name }}</span>
        </div>
        <ChevronDownIcon class="w-4 h-4 transform duration-300" :class="!list.show ? 'rotate-0' : '-rotate-180'" />
      </div>
      <!-- transitionタグに関数を設定する -->
      <transition @enter="enter" @leave="leave">
        <ul class="mt-1 overflow-hidden" v-show="list.show">
          <li class="mb-1" v-for="list in list.sublists" :key="list.name">
            <a :href="list.link" class="block p-2 rounded-sm hover:bg-blue-400 hover:text-white">
              <span class="pl-8">{{ list.name }}</span>
            </a>
          </li>
        </ul>
      </transition>
    </li>
  </ul>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: height 0.3s;
}
</style>
