<script setup>
import { onMounted, ref } from 'vue';
import shop from '../api/shop.js';

const products = ref([]);
onMounted(() => {
  shop.getProducts((data) => (products.value = data));
});
</script>

<template>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product.title }} - ¥{{ product.price.toLocaleString() }}</li>
  </ul>
</template>
