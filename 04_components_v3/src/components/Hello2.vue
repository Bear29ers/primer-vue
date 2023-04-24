<script>
// ルート要素にclassを適用させたくない場合はinheritAttrsパラメータをfalseにする
export default {
  inheritAttrs: false,
};
</script>
<script setup>
// const props = defineProps({
//   message: String,
//   name: String,
// });

// 分割代入を利用する
// const { name, message } = defineProps({
//   message: {
//     type: String,
//     // 入力必須の設定
//     required: true,
//   },
//   // 初期値の設定
//   name: { type: String, default: 'Jane' },
// });

// const props = defineProps(['message']);

// const props = defineProps({
//   price: Number,
// });

// const props = defineProps({
//   isAdmin: Boolean,
// });

// const props = defineProps({
//   name: String,
// });

// const props = defineProps({
//   person: Object,
// });

// const changeName = () => {
//   props.person.name = 'Ken';
// };

import { useAttrs } from 'vue';

const attrs = useAttrs();
console.log(attrs);
</script>

<template>
  <!-- <h2>初めてのコンポーネント</h2> -->
  <!-- <p>{{ props.name }} {{ props.message }}</p> -->
  <!-- <p>{{ name }} {{ message }}</p> -->

  <!-- <p>{{ props.price + 100 }}</p> -->

  <!-- <p v-if="props.isAdmin">管理者です。</p> -->
  <!-- <p v-else>管理者ではありません</p> -->

  <!-- <p>Hello {{ props.name }}</p> -->

  <!-- <p>Hello {{ props.person.name }}</p> -->
  <!-- <button @click="changeName">Change Name</button> -->

  <div>
    <h2 class="info">子コンポーネント</h2>
    <!-- class属性をそのまま子コンポーネントに指定したい場合 -->
    <!-- <p :class="$attrs.class">class属性の渡し方確認中</p> -->
    <p :class="attrs.class">class属性の渡し方確認中</p>
    <p :style="attrs.style">style属性の渡し方確認中</p>
  </div>
</template>
