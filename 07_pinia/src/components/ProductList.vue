<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useStoreProducts } from '../stores/products';

const { products } = storeToRefs(useStoreProducts());
const { getProducts } = useStoreProducts();

onMounted(() => {
  getProducts();
});
</script>

<template>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product.title }} - ¥{{ product.price.toLocaleString() }}</li>
  </ul>
</template>
