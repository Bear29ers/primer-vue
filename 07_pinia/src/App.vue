<script setup>
import { useStoreCounter } from './stores/counter';
import HelloPinia from './components/HelloPinia.vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import { storeToRefs } from 'pinia';

const counter = useStoreCounter();
// 分割代入を行ってもreactiveな性質を保持するためにはstoreToRefs関数を利用する必要がある
const { count, doubleCount } = storeToRefs(counter);
const { increment } = counter;
</script>

<template>
  <!-- 
  <h1>Pinia入門</h1>
  <p>Count: {{ count }}</p>
  <p>DoubleCount: {{ doubleCount }}</p>
  <div>
    <button @click="increment">Up</button>
  </div>
  <HelloPinia />
  -->

  <div>
    <h1>Pinia入門（カート）</h1>
    <hr />
    <h2>商品一覧</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>
